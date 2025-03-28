import { LitElement, html, css } from 'lit';
import { translations } from '../i18n.js';
export class NavMenu extends LitElement {
	static properties = {
		actions: { type: Array },
		lang: { type: String }
	};

	static styles = css`
        .nav-menu-container {
            background: white;
            padding: 1rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .logo-container {
            display: flex;
            align-items: center;
        }

        .logo {
            height: 14px;
        }

        .nav-items {
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        a {
            color: tomato;
            text-decoration: none;
        }

        a:hover {
            text-decoration: underline;
        }

        .flag {
            width: 18px;
            height: 14px;
            cursor: pointer;
        }

        .nav-action-button {
            display: flex;
            align-items: center;
            color: #f38c78;
            background: white;
            border: none;
            padding: 0.3rem 0.6rem;
            border-radius: 4px;
            cursor: pointer;
			font: 12px 'Open Sans', sans-serif;
        }
	`;

	constructor() {
		super();
		this.lang = localStorage.getItem('lang') || 'en';
		this.actions = [];

	}

	dispatchAction(eventName) {
		this.dispatchEvent(new CustomEvent(eventName, {
			bubbles: true,
			composed: true
		}));
	}

	render() {
		const flagCode = this.lang === 'tr' ? 'tr' : 'us';

		return html`
            <nav class="nav-menu-container">
                <div class="logo-container">
                    <img class="logo" src="https://www.ing.com.tr/documents/IngBank/assets/img/logo-mobile.png?v=20190502" alt="ING Logo" />
                </div>

                <div class="nav-items">
                    <a href="/employees" @click=${this.navigate}>${translations[this.lang].employees}</a>

                    ${this.actions.map(action => html`
                        <button
                                class="nav-action-button"
                                @click=${() => this.dispatchAction(action.event)}
                        >
                            ${action.icon} ${action.label}
                        </button>
                    `)}
	                
                    <img
                            class="flag"
                            src="https://flagcdn.com/24x18/${flagCode}.png"
                            alt="${flagCode.toUpperCase()} flag"
                            title="Switch Language"
                            @click=${this.toggleLanguage}
                    />
                </div>
            </nav>
		`;
	}

	navigate(e) {
		e.preventDefault();
		const href = e.target.getAttribute('href');
		window.history.pushState({}, '', href);
		window.dispatchEvent(new PopStateEvent('popstate'));
	}

	toggleLanguage() {
		this.lang = this.lang === 'en' ? 'tr' : 'en';
		localStorage.setItem('lang', this.lang);
		window.location.reload();
	}
}

customElements.define('nav-menu', NavMenu);
