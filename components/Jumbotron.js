import React from "react";
import { Jumbotron, Container, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MyJumbotron = props => {
  return (
    <div>
      <Jumbotron>
        <Container>
          <h1 className="display-5">O'zbek-Xitoy Savdo Uyi</h1>
          <p className="h4">
            Xitoydan biror narsa sotib olmoqchimisiz? Biz Sizga yordam beramiz.
            Tovarni sifatli va maqbul narxda topib beriladi va tovarlarni
            O'zbekitonga yetkazib berish xizmati ham mavjud.
          </p>
          <hr className="my-2" />
          <p className="lead">
            Nima uchun biz bilan hamkorlik qilishingiz kerak? Biz 2012 yildan
            beri shu ish bilan shug'ullanamiz. Tovarni Siz o'zingiz ham
            topishingiz mumkin. Lekin internetda birinchi saxifada ko'ringan
            tovar sifatli ekanligiga xech kim kafolat bermaydi. Biz Sizga
            o'zingiz topgandan ham yaxshiroq tovarni undan arzonroq narxda
            yetkazib beramiz.
          </p>
          <p className="h5">
            Biz bilan bog'laning:{" "}
            <FontAwesomeIcon
              icon={["fas", "phone-square-alt"]}
              color="#6DB65B"
              size="lg"
            />{" "}
            <FontAwesomeIcon
              icon={["fab", "weixin"]}
              color="#6DB65B"
              size="lg"
            />{" "}
            <FontAwesomeIcon
              icon={["fab", "whatsapp-square"]}
              color="#6DB65B"
              size="lg"
            />{" "}
            <FontAwesomeIcon
              icon={["fab", "telegram"]}
              color="#05c1f5"
              size="lg"
            />{" "}
            +86 18621797786 Ahmadjon | +998919054545 O'tkirjon
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default MyJumbotron;
