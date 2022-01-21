import './Footer.css' 
import LinkedIn from '../../img/linkdin_icon.png'
import Github from '../../img/github_icon.png'


function Footer() {

    return (
    <footer>
        <div className="footer-container">
            <div className="inner-footer">
                <a href="https://github.com/guillemfd" target="_blank"><img  class="footer_img" src={Github} alt="github_icon"/></a>
                <a href="https://www.linkedin.com/in/guillemfd/" target="_blank"><img class="footer_img" src={LinkedIn} alt="linkedin_icon"/></a>
                <p className="contact">Guillem Ferrer  ~  guillemfd@guillemfd.com  ~  +34 686 04 55 61</p>
            </div>
            <div className="copyright">
                <p>Feel free to use and share, but mention the author ~ Copyright &copy;2022 TV2C Movie App | All Rights reserved</p>
            </div>
        </div>
    </footer>
   )
}

export default Footer