import { useGlobalContext } from "../Context";


function Modal(){
    const {selectedMeal,closeModal} = useGlobalContext()
    const {strMeal:tittle, strMealThumb:image, strInstructions:text,strSource:source} = selectedMeal
    
    return(
        <aside className="modal-overlay">
            <div className="modal">
                <h1>{tittle}</h1>
                <img src={image}></img>
                <h3>Cooking Instructions:</h3>
                <p>{text}</p>
                <a href={source} target="_blank">Original Source</a>
                <button onClick={closeModal}>close</button>
            </div>
        </aside>

    )
}
export default Modal;