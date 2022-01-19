import './Footer.css' 
import LinkedIn from '../../img/linkdin_icon.png'
import Github from '../../img/github_icon.png'


function Footer() {

    return (
        <footer class="footer_container">
            <div id="footer_white">
                <div id="footer_img">
                    <a href="https://github.com/guillemfd" target="_blank"><img  class="footer_img" src={Github} alt="github_icon"/></a>
                    <a href="https://www.linkedin.com/in/guillemfd/" target="_blank"><img class="footer_img" src={LinkedIn} alt="linkedin_icon"/></a>
                    <h4 class="footer_text">by Guillem Ferrer</h4>
                </div>
            </div>
      </footer>
          )
}

export default Footer