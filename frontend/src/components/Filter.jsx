import "./Filter.css";

const Filter = ({ filter, setFilter, sort, setSort }) => {
    return (
        <div className="filter">
            <h2>Filtrar:</h2>
            <div className="filter-options">
                <div>
                    <p>Status:</p>
                    <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option value="All">Todas</option>
                        <option value="Completed">Completas</option>
                        <option value="Incomplete">Incompletas</option>
                    </select>
                </div>
                <div>
                    <p>Ordem alfabética:</p>
                    <button
                        onClick={() => setSort("Asc")}
                        style={{
                            fontWeight: sort === "Asc" ? "bold" : "normal",
                            color: "white", 
                            backgroundColor: "#0099E9", 
                            padding: "5px 10px",
                            border: "none",
                            borderRadius: "3px",
                            cursor: "pointer",
                            opacity: 0.8,
                            transition: "opacity 0.3s",
                        }}
                        >
                        Asc ▲
                        </button>
                        <button
                        onClick={() => setSort("Desc")}
                        style={{
                            fontWeight: sort === "Desc" ? "bold" : "normal",
                            color: "white", 
                            backgroundColor: "#0099E9", 
                            padding: "5px 10px",
                            border: "none",
                            borderRadius: "3px",
                            cursor: "pointer",
                            opacity: 0.8,
                            transition: "opacity 0.3s",
                        }}
                        >
                        Desc ▼
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Filter;