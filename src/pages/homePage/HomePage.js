import React from "react";
import styles from "./home.module.css";
import maamourFront from "../../Component/images/maamour-front.webp";
import maamourGarden from "../../Component/images/maamour-garden.jpg";
import maamourIncubation from "../../Component/images/maamour-incubation.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Fade } from "react-awesome-reveal";

function MainPage() {
  return (
    <div className={styles.container}>
      <Fade
        durtion={3000}
        cascade // fade in element by element (i * damping * delay)
        damping={0.3}
        triggerOnce // to present each element on itself while moving down
        direction="up"
        fraction={0.1}
      >
        <img
          src={maamourFront}
          alt="واجهة معمور"
          className={styles.maamourFront}
        ></img>
        <p>
          يُعد مسجد معمور بحي قرطبة في العاصمة السعودية الرياض نموذجا للمسجد
          العصري الصديق للبيئة، والمصمم بأحدث التقنيات الحديثة والخدمات
          المتكاملة التي تجعل المسجد جزءا رئيسيا من حياة المجتمع اليومية.
        </p>
        <p>
          يخدم المسجد كل فئات المجتمع بالحي، ابتداء من الأطفال والنساء والرجال
          وصولا إلى ذوي الاحتياجات الخاصة.
        </p>
        <p>
          ويضم المسجد حضانة أطفال، فباستطاعة الأم التي تأتي لصلاة التراويح أن
          تترك ابنها مع مشرفات متخصصات على الأطفال، بالإضافة إلى الحدائق
          المجاورة التي يمكن أن يلعب فيها الأبناء أمام أنظار آبائهم وأمهاتهم،
          كما يحوي المسجد صالات لتعليم القرآن وصالة متعددة الاستخدام لأهل الحي.
        </p>
        <Row>
          <Col>
            <img
              src={maamourGarden}
              alt="واجهة معمور"
              className={styles.maamourFront}
            ></img>
          </Col>
          <Col>
            <img
              src={maamourIncubation}
              alt="واجهة معمور"
              className={styles.maamourFront}
            ></img>
          </Col>
        </Row>
        <p>
          على سطح المسجد يوجد ممشى وملعب رياضي لكرة الطائرة، كما توجد فيه صيدلية
          يعود ريعها على أعمال خيرية وتبيع الأدوية بأسعار مخفضة، بالإضافة إلى
          صراف آلي وتموينات غذائية.
        </p>
        <p>
          ويوفر المسجد مواقف وممرات لذوي الاحتياجات الخاصة، كما يوفر "كود الوصول
          الشامل" الذي يتيح مثلا للكفيف دخول المسجد من غير مساعدة.
        </p>
        <p>
          كذلك يرتفع المسجد عشرين سنتيمترا فقط عن الأرض، أي أنه من دون سلالم
          للصعود، وذلك لمساعدة كبار السن وذوي الاحتياجات الخاصة.
        </p>
      </Fade>
    </div>
  );
}

export default MainPage;
