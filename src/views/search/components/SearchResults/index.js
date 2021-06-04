import SearchResultsItem from "./SearchResultsItem";

export default function SearchResults({ results, isSearching }) {
    return (
        <div style={{
            width: "100%",
            padding: "0rem, 2rem 0rem 2rem",
        }}>
            {!results?.length && isSearching && <p>No Existen Resultados</p>}
            {results?.map((value) => 
            <SearchResultsItem key={value.id} {...value}/>)} 
        </div> // SearchResultsItem key={value.id} name={value.name} email={value.email} forma 1 de pasar las propiedades de valores a un componente 
    ); //le estoy pasando todas propiedades que vienen dentro del iterador value, o dentro de este item 
}