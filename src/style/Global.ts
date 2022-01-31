import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
// @font-face {
//   font-family: HVD_Comic_Serif_Pro;
//   src: url(./fonts/HVD_Comic_Serif_Pro.otf);
// }
// @font-face {
//   font-family: Sofia_Pro_Regular;
//   src: url(./fonts/Sofia_Pro_Regular.otf);
// }
// @font-face {
//   font-family: Sofia_Pro_Semi_Bold;
//   src: url(./fonts/Sofia_Pro_Semi_Bold.otf);
// }
* {
  // font-family: Sofia_Pro_Regular;
  font-family: 'Kanit', sans-serif;
}
  body {
    background-color: ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }
  }
  .icon_sidebar
  {
    margin-right: 20px;
  }
  .jpBRLF
  {
  color: #848282;
  font-weight: 700;
  font-size: 16px;
  }
  #swap-page button,#join-pool-button
  {
  border-radius:10px !important;
  color:#211906 !important;
  }
  #swap-page button.htxlrH:hover,#join-pool-button:hover {
  background-color:#261c99;
  background-image: linear-gradient(45deg,#261c99 6%, #261c99 59%, #1b1369);
  opacity:1 !important;
  color:#fff !important;
  }
  button div
  {
  color: rgb(144,150,152);
  font-size: 16px !important;
  font-weight: 600 !important;
  line-height: 1.5 !important;
  margin-right: 16px !important;
  }
  button div#pair
  {
  color:#fff !impotant;
  }
  nav button {
    background-image: linear-gradient(128deg,#d4be61 6%,#d4be61 45%,#b89259 61%);
    box-shadow: 0px 0px 6px rgb(1 1 7 / 40%) !important;
    border-radius:30px !important;
    color:#211906 !important;
    font-weight:600;
  border: 1px solid #886b41 !important;

  }
  nav button:hover {
    background-color: #f3be21;
    background-image: linear-gradient(230deg,#fde36e 6%,#ffd831 39%,#f3be21);
    border: 1px solid #f3be21 !important;
    color: #443c1e !important;
  border-radius:30px !important;
  
  border-color:#886b41;
  box-shadow: 0px 0px 6px rgb(1 1 7 / 40%) !important;
  }
  nav button[aria-label="Toggle menu"] {
  background-color: transparent !important;
  border-radius:0px !important;
  background:none !important;
  height:32px !important;
  box-shadow: 0px 0px 0px rgb(1 1 7 / 40%) !important;
  border:none !important;
  }
  
  #pair:hover
  {
  background-color:transparent !important;
  }
  .evXgBv .desktop-icon,.desktop-icon
  {
  width:156px !important;
  // margin-top:10px;
  }
  .desktop-icon
  {
  width:200px !important;
  // margin-top:-10px;
  }
  #pool-nav-link,#swap-nav-link,button,a
  {
  box-shadow: 0px 0px 0px 0px rgba(14,14,44,0.4) inset !important;
  }
  .div_padding
  {
  border-bottom: 1px solid #E9EAEB;
  padding: 24px;
  }
  .heading_pool
  {
  font-size: 20px;
  font-weight: 600;
  line-height: 1.1;
  margin-bottom:5px !important;
  }
  .desc_pool
  {
  
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  font-weight: 700;
  }
  nav div[title="Bunny"]
  {
  display:none;
  }
  .menulink div
  {
  font-size:16px !important;
  color: #fff !important;
  text-transform:capitalize;
  font-weight: 500;
  font-family: 'Kanit', sans-serif !important;
  }
  div[role="button"] a {
  // text-transform: uppercase;
  // font-size: 15px;
  // font-family: 'Kanit', sans-serif !important;
  }
  .menulink img
  {
  max-width:18px !important;
  min-width:18px !important;
  }
  .menulink svg
  {
  margin-right: 21px;
  height:20px !important;
  width:20px !important;
  }
  nav button[aria-label="Toggle menu"] svg {
  fill: #9d7821 !important;
  // margin-top:13px;
  }
  @media only screen and (min-width:968px)
{
  nav button[aria-label="Toggle menu"] svg
  {
    margin-top:13px;
  }
}
  #swap-page svg
  {
  fill:#9d7821;
  color:#9d7821;
  }
  .bor_radius>div,.bor_radius a
  {
  border-radius:30px;
  }
  .bor_radius div a
  {
  // background-color:transparent;
  }
  .bor_radius div a:hover,.bor_radius div a:hover:not(:disabled):not(.button--disabled):not(:active)
  {
    background-color: #d4be61;
    background-image: linear-gradient(128deg,#d4be61 6%,#d4be61 45%,#b89259 61%);
    color: #211906;
  opacity:1 !important;
  }
  .bor_radius div a(:active),.bor_radius div a:active
  {
  background-color: #524b9f !important;
  color:#211906 !important;
  }
  .bor_radius div a:active:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled),
  .bor_radius div a[variant="subtle"] {
  opacity: 1;
  background-color: #d4be61;
    background-image: linear-gradient(128deg,#d4be61 6%,#d4be61 45%,#b89259 61%);
    color: #211906;
  }
  #swap-page button,#pool-page-button button
  {
    background-color: #886b41;
    background-image: linear-gradient(128deg,#d4be61 6%,#d4be61 45%,#b89259 61%);
border: 1px solid #886b41 !important;
box-shadow: inset 0px 0px 0px rgba(14,14,44,0.4);
border-radius:30px !important;
color:#211906 !important;
box-shadow: 0px 0px 6px rgb(1 1 7 / 40%) !important;
font-weight:600 !important;
height:40px !important;
  }

  #swap-page button.open-currency-select-button,
  #pool-page-button .open-currency-select-button
  {
  background:none !important;
  border:none !important;
  }
  
  #swap-page button.open-currency-select-button:hover,
  #pool-page-button .open-currency-select-button:hover
  {
  background:none !important;
  border:none !important;
  }
  #pool-page-button .open-currency-select-button svg
  {
  fill: #9d7821;
  color: #9d7821;
  }
  #swap-page button.btn_icon_center,#swap-page button.btn_icon_center:hover
  {
  border-radius:50% !important;
  }
  #swap-page button:hover,#pool-page-button button:hover
  {
    background-color: #f3be21;
    background-image: linear-gradient(230deg,#fde36e 6%,#ffd831 39%,#f3be21);
    border: 1px solid #f3be21 !important;
    color: #443c1e !important;
  box-shadow: 0px 0px 6px rgb(1 1 7 / 40%) !important;
  }
  #swap-page button[title="Settings"],
  #swap-page button[title="Recent transactions"],
  .btn_icon_center
  {
  background:none !important;
  border:none !important;
  box-shadow: 0px 0px 0px rgb(1 1 7 / 40%) !important;

  }
  // .arrow_color_grey .open-currency-select-button svg,
  // #add-liquidity-input-tokena svg,#add-liquidity-input-tokenb svg
  // {
  //   color:#fff !important;
  //   fill: #fff !important;
  // }
  #swap-currency-input,#swap-currency-input>div,
  #swap-currency-output,#swap-currency-output>div,.radius_card,
  #add-liquidity-input-tokena,#add-liquidity-input-tokena>div,
  #add-liquidity-input-tokenb,#add-liquidity-input-tokenb>div
  {
  border-radius:10px;
  }
  div[data-reach-dialog-overlay]
  {
  z-index:21 !important;
  }
  .card_bg_1
  {
  border-radius:10px;
  
  background-position: center;
  
  }
  .btn_yellow,#join-pool-button
  {
    background-color: #f3be21;
    background-image: linear-gradient(
128deg,#d4be61 6%,#d4be61 45%,#b89259 61%);
    border: 1px solid #886b41  !important;
    color: #211906 !important;
    box-shadow: 0px 0px 6px rgb(1 1 7 / 40%) !important;
    border-radius: 30px !important;
    font-weight: 600 !important;
    align-items: center;
    cursor: pointer;
    display: inline-flex;
    font-size: 16px;
    height: 40px;
    line-height: 1;
    letter-spacing: 0.03em;
    justify-content: center;
    outline: 0px;
    padding: 0px 24px;
    -webkit-transition: background-color 0.2s ease 0s;
    transition: background-color 0.2s ease 0s;
    opacity: 1;
    margin-top: 10px !important;
  }
  .btn_yellow:hover,#join-pool-button:hover
  {
    background-image: linear-gradient(230deg,#fde36e 6%,#ffd831 39%,#f3be21);
          box-shadow: 0px 0px 6px rgb(1 1 7 / 40%) !important;
          border-radius: 30px !important;
color:#443c1e  !important;
border-color:#f3be21 !important;
  }
  // .slippage_btn
  // {
  //   background-color: #e9eaeb !important;
  // }
  #token-search-input
  {
  border:1px solid #948544;
  }
  button[aria-label="Close the dialog"]:hover:not(:disabled):not(.button--disabled):not(:active)
  {
  opacity:1 !important;
  }
  button:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {
  opacity:1 !important;
  }
  .input_color button,#swap-button
  {
  color:#211906 !important;
  }
  .card_bg_1_text
  {
    color:#fff !important;
  }
  #swap-page .price_icon svg {
  fill: #181818 !important;
  color: #181818 !important;
}
#swap-page .price_icon svg:hover
{
  fill: #524b9f !important;
  color: #524b9f !important;
}
.menulink svg
{
  fill: #9d7821;
    width: 20px;
}
.bor_radius div a
{
  height:40px !important;
  border-radius:30px !important;
}
.banner_home_1
{
  padding: 32px 32px !important;
 
    margin: auto auto 25px;
  
    font-weight:600;
    text-align:center !important;
   
    margin-top:20px !important;
}
.px-0{
  // padding-left: 0px !important;
    // padding-right: 0px !important;
    padding-top: 0px !important;
    // margin-left: 0px !important;
    // margin-right: 0px !important;
    // max-width:100% !important;
}
.banner_home_1 .bor_radius
{
  margin-bottom:0px !important;
}
.inpt_tran {
  border: 2px solid #9d7821;
  border-radius: 16px;
  color: #9d7821;
  background-color: transparent !important;
}
.inpt_tran svg

{
  color: #9d7821 !important;
  fill: #9d7821 !important;
}
button[title="Settings"] svg,
button[title="Recent transactions"] svg

{
  color: #9d7821 !important;
  fill: #9d7821 !important;
}
#swap-page button.btn_icon_center, #pool-page-button button.btn_icon_center 
{
  border-color:#264663 !important;
  box-shadow: 0px 0px 0px rgb(1 1 7 / 40%) !important;
  height:32px !important;
  border-color:#9d7821 !important;
  
}
@media only screen and (min-width:768px)
{
  .row_grid_full
  {
    display: grid !important; 
    grid-template-columns: 45% 10% 45%;
  }
  .btn_width_area
{
max-width:300px !important;
margin-left:auto;
margin-right:auto;
min-width:300px;

}
.card_bg_1
{
// max-width:436px !important;
margin-left:auto;
margin-right:auto;
// min-width:436px;

}
.row_grid_full>div
{
  justify-content:center !important;
}
}
.card_bg_1
{
  margin-top:20px;

}
@media only screen and (max-width:767px)
{
  .row_grid_full.gap_mob>div
  {
    margin-top:10px;
    margin-bottom:10px;
  }
  #pool-page-button .row_grid_full>div
  {
    margin-top:10px;
    margin-bottom:10px;
  }
}
@media only screen and (max-width:967px)
{
  .px-0
  {
    padding-left:0px !important;
    padding-right:0px !important;
  }
}
@media only screen and (max-width:575px)
{.px-left-right
  {
    padding-left: 16px;
      padding-right: 16px;
  }

}
@media only screen and (min-width:576px) and (max-width:967px)
{.px-left-right
  {
    padding-left: 24px;
      padding-right: 24px;
  }

}
.add_icon_plue_new
{
  height:50px;
  display:flex;
  align-items:center;
  justify-content:center;
}
.title_inter
{
  color:#8b6729 !important;

  background: linear-gradient(87deg,#806024, #e6b519);

  background: -webkit-linear-gradient(87deg,#806024, #e6b519);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.bg_trans_new,.bg_trans_new_icon div
{
  background-color:transparent !important;
}
`

export default GlobalStyle
