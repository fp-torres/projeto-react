import styles from './ProjectSearchBar.module.css';

function ProjectSearchBar({ handleSearch }) {
    return (
        <div className={styles.search_container}>
            <input 
                type="text" 
                placeholder="Buscar projeto pelo nome..." 
                onChange={handleSearch}
            />
        </div>
    );
}

export default ProjectSearchBar;