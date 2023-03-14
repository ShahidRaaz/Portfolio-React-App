import "./Projects.css";
import giticon from './GitHub-Mark.jpeg'
const Projects= () => {
    return (
        <div id="Projects"> 
        <p id="para1">Some thing I've Built</p>
        <div class="flex-container">
            <div class="flex-item">
                <a href="">
                <img alt="error" src={giticon} className="img"/>
                </a>
                <h5 className="pn">Cocktail Sort Visualizer</h5>
                <p className="prp">An website which visualizes how coctail sort algorithm sorts the given array</p>
            </div>
            <div class="flex-item">
                <a href="">
                <img alt="error" src={giticon} className="img"/>
                </a>
                <h5 className="pn">Cocktail Sort Visualizer</h5>
                <p className="prp">An website which visualizes how coctail sort algorithm sorts the given array</p>
            </div>
            <div class="flex-item">
                <a href="">
                <img alt="error" src={giticon} className="img"/>
                </a>
                <h5 className="pn">Cocktail Sort Visualizer</h5>
                <p className="prp">An website which visualizes how coctail sort algorithm sorts the given array</p>
            </div>
        </div>
        <div class="flex-container">
            <div class="flex-item">
                <a href="">
                <img alt="error" src={giticon} className="img"/>
                </a>
                <h5 className="pn">Cocktail Sort Visualizer</h5>
                <p className="prp">An website which visualizes how coctail sort algorithm sorts the given array</p>
            </div>
            <div class="flex-item">
                <a href="">
                <img alt="error" src={giticon} className="img"/>
                </a>
                <h5 className="pn">Cocktail Sort Visualizer</h5>
                <p className="prp">An website which visualizes how coctail sort algorithm sorts the given array</p>
            </div>
            <div class="flex-item">
                <a href="">
                <img alt="error" src={giticon} className="img"/>
                </a>
                <h5 className="pn">Cocktail Sort Visualizer</h5>
                <p className="prp">An website which visualizes how coctail sort algorithm sorts the given array</p>
            </div>
        </div>      
        </div>
    )
}
export default Projects;