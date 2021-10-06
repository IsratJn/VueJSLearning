let articles = [
	{ id: 1, title: 'Rain drops are falling on my head',slug:'first-post', exerpt: 'A little article admiring the rain.', content:' It’s officially time to start expecting the rain to fall. Spring is here, but not without the necessary drops of water that quench the thirst of the soil. Each tiny drop helps to bring the beauty of spring to life—and be honest—when the scorching summer days hit, you kind of miss the rain…just a little. Living in the Pacific Northwest, we get our fair share (some would say MORE than our fair share) of rain. It’s okay, though. We’ve learned to love the rain.'  },
	{ id: 2, title: 'Robi, The sun of bengali literature',slug:'second-post', exerpt: 'Blog about the person who changed our literature, art, culture and education system.', content: 'Rabindranath Tagore, Bengali Rabīndranāth Ṭhākur, (born May 7, 1861, Calcutta [now Kolkata], India—died August 7, 1941, Calcutta), Bengali poet, short-story writer, song composer, playwright, essayist, and painter who introduced new prose and verse forms and the use of colloquial language into Bengali literature, thereby freeing it from traditional models based on classical Sanskrit. He was highly influential in introducing Indian culture to the West and vice versa, and he is generally regarded as the outstanding creative artist of early 20th-century India. In 1913 he became the first non-European to receive the Nobel Prize for Literature.'  },
	{id: 3, title: 'Mono mor megher o shongi',slug:'third-post',exerpt: 'A breif discusion of one of my most favorite song.', content: 'Mon mor megher songi Ure chole digdigantero paane Nihsimo shunye Shrabono borshono songite Rimijhim rimijhim rimijhim Mono mor hongsobolakar pakhay jaay ure Kochito kochito chokito torito aaloke Jhanjhanomonjiro bajay jhonjha rudro anonde Kolo kolo kolomondre nirjhorini Dak dey prolay ahwaane'},
];

let Home = {
	template: `
<div>
	<h1 class="page-header">Home</h1>
	<div v-for="article in articles">
		<h3><router-link :to="/articles/ + article.slug">{{ article.title }}</router-link></h3>
		<p>{{ article.exerpt }}</p>
	</div>
</div>
	`,

	data() {
		return {
			articles: []
		}
	},

	mounted() {
		this.articles = articles;
	}
};

let About = {
	template: `
		<div>
			<h1 class="page-header">About</h1>
			<p>This a personal blog where i share my personal ideas and thoughts on various subjects. Whoever is here, i personally thank you. </p>
		</div>
	`
};

let Article = {
	template: `
		<div>
			<h2>{{ article.title }}</h2>
			<p>{{ article.content }}</p>
		</div>
	`,

	data() {
		return {
			article: {}
		};
	},

	mounted() {
		this.article = this.findBySlug(this.$route.params.slug);
	},

	methods: {
		findBySlug(slug) {
			for (let i = 0; i < articles.length; i++)
			{
				if (slug === articles[i].slug) return articles[i];
			}

			return null;
		}
	}
};

let routes = [
	{ path: '/', component: Home },
	{ path: '/contact', component: About },
	{ path: '/articles/:slug', component: Article }
];

let router = new VueRouter({ routes });

let app = new Vue({ router }).$mount('#app');