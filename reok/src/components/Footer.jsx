import "styles/css/reusable-sections/footer.css";

const Footer = () => {
  return (
    <section class="footer bg-dark" id="footer">
      <div class="container">
        <div class="footer-box">
          <div class="row footer-box-left text-center">
            <h4>About us</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur excepturi veritatis quod hic vero obcaecati rem,
              officiis sequi vitae ea quos blanditiis distinctio, dolorum totam
              suscipit error, necessitatibus tempore nemo!
            </p>
          </div>
          <div class="row footer-box-right text-start">
            <h4>This page was made by</h4>
            <ul>
              <li>Jofay Zhan Segura</li>
              <li>Daniel Felipe Ramirez Ferrín</li>
              <li>Omaira Dayana Velásquez Mantilla</li>
              <li>Juan Alberto Hernandez</li>
              <li>María José Jadnat Pérez Alba</li>
            </ul>
          </div>
        </div>
        <hr />
        <span class="copyright">© 2021 FATNAG. All rights reserved.</span>
      </div>
    </section>
  );
};

export default Footer;