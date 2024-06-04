
import "../pages/CreditCard.css"
function CreditCardPage() {

    return (

        <>
<section>

    <div className="CARDFINAL">
<div className="card">
         <div className="card__side card__side_front">
            <div className="flex__1">
               <p className="card__side__name-bank">SharpBank</p>
               <div className="card__side__chip"></div>
               <p className="car    d__side__name-person">GABRIEL COLLARES</p>
            </div>
         </div>
         <div className="card__side card__side_back">
            <div className="card__side__black"></div>
            <p className="card__side__number">XXXX XXXX XXXX XXXX</p>
            <div className="flex__2">
               <p className="card__side__other-numbers card__side__other-numbers_1">XX/XX</p>
               <p className="card__side__other-numbers card__side__other-numbers_2">XXX</p>
            </div>
            <p className="card__side__other-info">
               SharpBank.UA | 0 800 205 205 | 
               АТ "SHARP BANK". ЛІЦЕНЗІЯ 
               НБУ №92 ВІД 20.01.1994 | 
               PCE PC100650 WORLD DEBIT
            </p>
         </div>
      </div>
      </div>
</section>
        </>
    )
}

export default CreditCardPage