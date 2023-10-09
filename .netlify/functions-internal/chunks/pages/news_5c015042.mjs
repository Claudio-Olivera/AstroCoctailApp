/* empty css                           */import { d as createComponent, r as renderTemplate, g as renderComponent, u as unescapeHTML } from '../astro_bef4dcfc.mjs';
import 'clsx';
import { $ as $$Layout } from './about_c54dcb8f.mjs';
import 'html-escaper';

const html = "<h1 id=\"noticias-del-mundo-sobre-cócteles-y-bares\">Noticias del mundo sobre cócteles y bares</h1>\n<h2 id=\"la-ginebra-se-consolida-como-la-bebida-espirituosa-más-popular-del-mundo\">La ginebra se consolida como la bebida espirituosa más popular del mundo</h2>\n<p>Según un informe de The Spirits Business, la ginebra se consolidó como la bebida espirituosa más popular del mundo en 2022, con un volumen de ventas de 1.600 millones de litros. Esto representa un crecimiento del 10% con respecto al año anterior.</p>\n<p>El informe señala que el crecimiento de la ginebra se debe a una serie de factores, entre los que se incluyen la creciente popularidad de los cócteles, el aumento de la concienciación sobre los beneficios para la salud del gin y la introducción de nuevas marcas y sabores.</p>\n<p><em>Fuente: The Spirits Business</em> <em>/</em> <em>Fecha: 6 de octubre de 2023</em></p>\n<hr>\n<h2 id=\"el-pisco-sour-se-corona-como-el-cóctel-más-popular-de-américa-latina\">El pisco sour se corona como el cóctel más popular de América Latina</h2>\n<p>Un estudio realizado por Culinary Backstreets encontró que el pisco sour es el cóctel más popular de América Latina. El estudio se basó en una encuesta a más de 1.000 personas de toda la región, y encontró que el pisco sour es el cóctel más popular en 10 de los 15 países encuestados.</p>\n<p>El pisco sour es un cóctel peruano hecho con pisco, limón, azúcar y clara de huevo. Es un cóctel refrescante y cítrico que se ha convertido en un símbolo de la cultura peruana.</p>\n<p><em>Fuente: Culinary Backstreets</em> <em>/</em> <em>Fecha: 5 de octubre de 2023</em></p>\n<hr>\n<h2 id=\"la-coctelería-sostenible-gana-terreno-en-todo-el-mundo\">La coctelería sostenible gana terreno en todo el mundo</h2>\n<p>La coctelería sostenible está ganando terreno en todo el mundo, ya que los bartenders buscan formas de reducir su impacto ambiental. Esto incluye el uso de ingredientes y envases sostenibles, la reducción del desperdicio y el apoyo a los productores locales.</p>\n<p>Un estudio reciente de Drinks International encontró que el 68% de los bartenders están interesados en la coctelería sostenible. El estudio también encontró que el 77% de los consumidores están dispuestos a pagar más por un cóctel sostenible.</p>\n<p><em>Fuente: Drinks International</em> <em>/</em> <em>Fecha: 4 de octubre de 2023</em></p>\n<hr>";

				const frontmatter = {"layout":"../layouts/Layout.astro"};
				const file = "C:/Users/Claudio/Desktop/astro-main/src/pages/news.md";
				const url = "/news";
				function rawContent() {
					return "\n# Noticias del mundo sobre cócteles y bares  \n\n## La ginebra se consolida como la bebida espirituosa más popular del mundo  \n\nSegún un informe de The Spirits Business, la ginebra se consolidó como la bebida espirituosa más popular del mundo en 2022, con un volumen de ventas de 1.600 millones de litros. Esto representa un crecimiento del 10% con respecto al año anterior.\n\nEl informe señala que el crecimiento de la ginebra se debe a una serie de factores, entre los que se incluyen la creciente popularidad de los cócteles, el aumento de la concienciación sobre los beneficios para la salud del gin y la introducción de nuevas marcas y sabores.\n\n*Fuente: The Spirits Business* */* *Fecha: 6 de octubre de 2023*  \n\n---  \n\n## El pisco sour se corona como el cóctel más popular de América Latina  \n\nUn estudio realizado por Culinary Backstreets encontró que el pisco sour es el cóctel más popular de América Latina. El estudio se basó en una encuesta a más de 1.000 personas de toda la región, y encontró que el pisco sour es el cóctel más popular en 10 de los 15 países encuestados.\n\nEl pisco sour es un cóctel peruano hecho con pisco, limón, azúcar y clara de huevo. Es un cóctel refrescante y cítrico que se ha convertido en un símbolo de la cultura peruana.  \n\n*Fuente: Culinary Backstreets* */* *Fecha: 5 de octubre de 2023*  \n\n---\n\n## La coctelería sostenible gana terreno en todo el mundo  \n\nLa coctelería sostenible está ganando terreno en todo el mundo, ya que los bartenders buscan formas de reducir su impacto ambiental. Esto incluye el uso de ingredientes y envases sostenibles, la reducción del desperdicio y el apoyo a los productores locales.  \n\nUn estudio reciente de Drinks International encontró que el 68% de los bartenders están interesados en la coctelería sostenible. El estudio también encontró que el 77% de los consumidores están dispuestos a pagar más por un cóctel sostenible.  \n\n*Fuente: Drinks International* */* *Fecha: 4 de octubre de 2023*  \n\n---";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"noticias-del-mundo-sobre-cócteles-y-bares","text":"Noticias del mundo sobre cócteles y bares"},{"depth":2,"slug":"la-ginebra-se-consolida-como-la-bebida-espirituosa-más-popular-del-mundo","text":"La ginebra se consolida como la bebida espirituosa más popular del mundo"},{"depth":2,"slug":"el-pisco-sour-se-corona-como-el-cóctel-más-popular-de-américa-latina","text":"El pisco sour se corona como el cóctel más popular de América Latina"},{"depth":2,"slug":"la-coctelería-sostenible-gana-terreno-en-todo-el-mundo","text":"La coctelería sostenible gana terreno en todo el mundo"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$Layout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
