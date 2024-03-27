export default function Card({ cover, title }) { //les cards de locations récupèrent les couvertures et titres en props depuis Home
	return (
		<article className="card-logement">
			<img src={cover} alt="location" />
			<div className="card-logement-layer">
				<p className="card-logement-title">{title}</p>
			</div>
		</article>
	);
}