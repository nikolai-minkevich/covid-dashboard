import create from "./create";
import rslogo from '../assets/logo-rs.png'
class Footer {
  generateLayout() {
    const github1 = create('a', null, "Nastya Vasenina",null,['href',"https://github.com/VaseninaNastya"])
    const github2 = create('a', null, "Nikolai Minkevich",null,['href',"https://github.com/nikolai-minkevich"])
    const year = create("span", null, "2020")
    const img = create('img', "footer_img", null, null, ["src", rslogo])
    const school = create("a", null, img, null,['href',"https://rs.school/js/"])
    const footer = create("footer", null,[
        github1,
        github2,
        year,
        school
    ] )
    return footer;
  }
}
export default Footer;
