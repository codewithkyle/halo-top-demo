import { broadcaster } from 'djinnjs/broadcaster';

class HeaderComponent extends HTMLElement {
	private links: Array<HTMLAnchorElement>;

	constructor() {
		super();
		this.links = Array.from(this.querySelectorAll('a[data-id]'));
	}

	private inbox(data) {
		const { type } = data;
		switch (type) {
			case 'completed':
				this.updateActivePage();
				break;
			default:
				return;
		}
	}

	private updateActivePage(): void {
		const base = location.pathname.split('/')[1];
		this.links.map(link => {
			if (link.pathname.split('/')[1] === base) {
				link.classList.add('is-active');
			} else {
				link.classList.remove('is-active');
			}
		});
	}

	connectedCallback() {
		broadcaster.hookup('pjax', this.inbox.bind(this));
	}
}
customElements.define('header-component', HeaderComponent);
