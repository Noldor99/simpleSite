import React from 'react'
import css from './Enjoy.module.sass'
import Person from '../../assets/img/phoneMore.jpg'
import Svg1ApplePlayBlack from '../../assets/Market/Svg1ApplePlayBlack'
import Svg1AppStore from '../../assets/Market/Svg1AppStore'
import Svg0Rectangle_1 from '../../assets/Border/Svg0Rectangle_1'

const Enjoy = () => {
  return (
    <div className={css.enjoy}>
      <div className={css.wrap}>
        <div className={css.photo}>
          <img src={Person} alt=""/>
        </div>
        <div className={css.container}>
          <p>Download app to enjoy more!</p>
          <p>Amet in elementum nulla scelerisque dui, egestas at. Elit consectetur turpis elementum amet vitae et etiam nec. Varius volutpat hac adipiscing tincidunt pretium. </p>
          <div className={css.icons}>
          
          <a href="/"><Svg1ApplePlayBlack/></a>
          <a href="/">
            <svg width="166" height="53" viewBox="0 0 166 53" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M9.81467 0.494019H156.526C159.787 0.494019 160.967 0.859234 162.159 1.53749C163.336 2.20479 164.298 3.23651 164.92 4.49835C165.553 5.7766 165.894 7.04181 165.894 10.5244V42.6373C165.894 46.1199 165.553 47.3851 164.92 48.6634C164.298 49.9252 163.336 50.9569 162.159 51.6242C160.967 52.3025 159.787 52.6677 156.539 52.6677H9.80251C6.55441 52.6677 5.37439 52.3025 4.18221 51.6242C3.00534 50.9569 2.04309 49.9252 1.42072 48.6634C0.788134 47.3851 0.44751 46.1199 0.44751 42.6373V10.5244C0.44751 7.04181 0.788134 5.7766 1.42072 4.49835C2.04309 3.23651 3.00534 2.20479 4.18221 1.53749C5.37439 0.859234 6.55441 0.494019 9.80251 0.494019H9.81467Z" fill="black"/>
              <path d="M37.3687 26.62C37.393 24.1809 38.5852 21.9374 40.5194 20.6592C39.9134 19.7325 39.1139 18.9704 38.1846 18.4337C37.2553 17.897 36.2219 17.6005 35.1668 17.5679C32.9284 17.307 30.7508 19.0026 29.6073 19.0026C28.4394 19.0026 26.6755 17.594 24.7777 17.6331C23.5499 17.676 22.3534 18.0589 21.3046 18.7446C20.2557 19.4303 19.3903 20.3955 18.7925 21.5461C16.2013 26.3591 18.1356 33.4156 20.6172 37.3026C21.8581 39.1939 23.2936 41.3199 25.2035 41.2417C27.0526 41.1634 27.7582 39.9765 29.9844 39.9765C32.2106 39.9765 32.8554 41.2417 34.7896 41.2025C36.7847 41.1634 38.0377 39.2852 39.2421 37.3678C40.1301 36.0113 40.8236 34.5113 41.2737 32.933C40.1166 32.408 39.1293 31.5294 38.4349 30.4067C37.7405 29.2841 37.3696 27.9671 37.3687 26.62ZM33.7069 15.0114C34.7947 13.6143 35.3315 11.8174 35.2033 10.0027C33.5366 10.1983 32.0038 11.0462 30.909 12.3896C30.37 13.0465 29.9573 13.8108 29.6942 14.639C29.4312 15.4671 29.3231 16.3427 29.3762 17.2157C30.2067 17.2246 31.0282 17.0308 31.7786 16.6488C32.5289 16.2669 33.1883 15.707 33.7069 15.0114Z" fill="white"/>
              <path d="M62.8549 35.2419H57.1007L55.7139 39.6245H53.2809L58.7309 23.4245H61.2734L66.7234 39.6245H64.2417L62.8549 35.2419ZM57.6968 33.2202H62.2588L60.0082 26.1115H59.9474L57.6968 33.2202ZM78.4992 33.7158C78.4992 37.381 76.6745 39.7419 73.9008 39.7419C73.2008 39.7819 72.5043 39.6098 71.8912 39.2454C71.2781 38.8809 70.773 38.3388 70.4337 37.681H70.3851V43.5245H68.1224V27.8071H70.3121V29.7636H70.3486C70.7032 29.1068 71.2176 28.5657 71.8369 28.1981C72.4561 27.8305 73.1569 27.6503 73.8643 27.6767C76.6623 27.6767 78.4992 30.0506 78.4992 33.7158ZM76.1757 33.7158C76.1757 31.3289 75.02 29.7506 73.2561 29.7506C71.5408 29.7506 70.3729 31.3549 70.3729 33.7158C70.3729 36.0897 71.5408 37.694 73.2682 37.694C75.02 37.694 76.1757 36.1288 76.1757 33.7158ZM90.6157 33.7158C90.6157 37.381 88.791 39.7419 86.0295 39.7419C85.3294 39.7819 84.633 39.6098 84.0199 39.2454C83.4067 38.8809 82.9016 38.3388 82.5624 37.681H82.5016V43.5245H80.251V27.8071H82.4407V29.7636H82.4772C82.8308 29.1088 83.3433 28.569 83.9603 28.2015C84.5772 27.834 85.2754 27.6527 85.9808 27.6767C88.7788 27.6767 90.6157 30.0506 90.6157 33.7158ZM88.3043 33.7158C88.3043 31.3289 87.1487 29.7506 85.3847 29.7506C83.6573 29.7506 82.5016 31.3549 82.5016 33.7158C82.5016 36.0897 83.6573 37.694 85.3847 37.694C87.1487 37.694 88.3043 36.1288 88.3043 33.7158ZM98.6326 35.1114C98.8029 36.7158 100.251 37.7723 102.246 37.7723C104.156 37.7723 105.53 36.7158 105.53 35.268C105.53 34.0028 104.691 33.2593 102.732 32.7375L100.786 32.2289C98 31.5115 96.7226 30.1289 96.7226 27.8724C96.7226 25.068 98.9853 23.1506 102.209 23.1506C105.409 23.1506 107.598 25.068 107.671 27.8724H105.384C105.25 26.255 103.997 25.2637 102.185 25.2637C100.36 25.2637 99.1192 26.255 99.1192 27.7028C99.1192 28.8376 99.9099 29.5289 101.856 30.0376L103.523 30.468C106.625 31.2506 107.902 32.5941 107.902 34.9549C107.902 37.994 105.652 39.8853 102.075 39.8853C98.7299 39.8853 96.4672 38.0332 96.3212 35.1114H98.6326ZM112.793 25.0158V27.8071H114.885V29.7245H112.793V36.2462C112.793 37.2506 113.206 37.7201 114.131 37.7201C114.374 37.7201 114.618 37.694 114.861 37.668V39.5723C114.459 39.6636 114.034 39.7027 113.62 39.6897C111.382 39.6897 110.518 38.7766 110.518 36.4941V29.7245H108.912V27.8071H110.518V25.0158H112.793ZM116.09 33.7158C116.09 29.9984 118.133 27.6637 121.321 27.6637C124.508 27.6637 126.552 30.0115 126.552 33.7158C126.552 37.4462 124.52 39.7679 121.321 39.7679C118.121 39.7679 116.09 37.4462 116.09 33.7158ZM124.24 33.7158C124.24 31.1723 123.145 29.6723 121.321 29.6723C119.496 29.6723 118.401 31.1723 118.401 33.7158C118.401 36.2723 119.496 37.7593 121.321 37.7593C123.145 37.7593 124.24 36.2723 124.24 33.7158ZM128.413 27.8071H130.566V29.8158H130.615C130.919 28.5245 132.026 27.6376 133.267 27.6897C133.522 27.6897 133.79 27.7158 134.045 27.781V30.0506C133.715 29.9388 133.37 29.8859 133.023 29.8941C132.694 29.8783 132.365 29.9397 132.059 30.0739C131.754 30.2082 131.479 30.412 131.255 30.6714C131.03 30.9308 130.861 31.2394 130.759 31.5759C130.657 31.9125 130.624 32.2688 130.663 32.6202V39.6245H128.413V27.8071ZM144.459 36.1549C144.155 38.294 142.208 39.7679 139.714 39.7679C136.515 39.7679 134.532 37.4593 134.532 33.768C134.532 30.0636 136.527 27.6637 139.629 27.6637C142.67 27.6637 144.592 29.9071 144.592 33.4941V34.3158H136.807V34.4723C136.772 34.9069 136.824 35.3444 136.959 35.7559C137.094 36.1674 137.308 36.5434 137.589 36.8592C137.87 37.1749 138.21 37.423 138.587 37.5872C138.963 37.7514 139.369 37.8278 139.775 37.8114C140.87 37.9158 141.904 37.2506 142.318 36.1549H144.459ZM136.819 32.6332H142.33C142.35 32.2424 142.295 31.8513 142.167 31.4845C142.04 31.1177 141.843 30.783 141.59 30.5014C141.336 30.2198 141.031 29.9973 140.694 29.8479C140.357 29.6985 139.994 29.6254 139.629 29.6332C138.887 29.6332 138.175 29.9493 137.651 30.5119C137.126 31.0745 136.831 31.8376 136.831 32.6332H136.819Z" fill="white"/>
              <path d="M57.4167 11.2287C57.8905 11.1937 58.3657 11.2718 58.8079 11.4574C59.2502 11.643 59.6486 11.9314 59.9744 12.3019C60.3002 12.6724 60.5453 13.1158 60.692 13.6001C60.8387 14.0844 60.8835 14.5976 60.823 15.1026C60.823 17.5809 59.57 19.0156 57.4167 19.0156H54.7891V11.2287H57.4167ZM55.9204 17.907H57.2829C57.6209 17.9279 57.959 17.8681 58.2728 17.732C58.5866 17.5959 58.8683 17.3867 59.0976 17.1197C59.3268 16.8526 59.498 16.5344 59.5986 16.1878C59.6992 15.8412 59.7268 15.4751 59.6795 15.1157C59.7268 14.7563 59.6992 14.3901 59.5986 14.0435C59.498 13.697 59.3268 13.3787 59.0976 13.1116C58.8683 12.8446 58.5866 12.6355 58.2728 12.4993C57.959 12.3632 57.6209 12.3034 57.2829 12.3244H55.9204V17.907ZM62.1003 16.0678C62.076 15.6879 62.1248 15.3066 62.2437 14.9477C62.3626 14.5888 62.549 14.2599 62.7915 13.9815C63.0339 13.7031 63.3271 13.4812 63.6529 13.3294C63.9788 13.1776 64.3302 13.0993 64.6854 13.0993C65.0406 13.0993 65.3921 13.1776 65.7179 13.3294C66.0437 13.4812 66.3369 13.7031 66.5793 13.9815C66.8218 14.2599 67.0082 14.5888 67.1271 14.9477C67.246 15.3066 67.2948 15.6879 67.2705 16.0678C67.2948 16.4478 67.246 16.8291 67.1271 17.188C67.0082 17.5469 66.8218 17.8758 66.5793 18.1541C66.3369 18.4325 66.0437 18.6545 65.7179 18.8063C65.3921 18.958 65.0406 19.0363 64.6854 19.0363C64.3302 19.0363 63.9788 18.958 63.6529 18.8063C63.3271 18.6545 63.0339 18.4325 62.7915 18.1541C62.549 17.8758 62.3626 17.5469 62.2437 17.188C62.1248 16.8291 62.076 16.4478 62.1003 16.0678ZM66.1513 16.0678C66.1513 14.8026 65.6282 14.0591 64.6915 14.0591C63.7426 14.0591 63.2195 14.8026 63.2195 16.0678C63.2195 17.3591 63.7426 18.0896 64.6793 18.0896C65.6282 18.0896 66.1513 17.3461 66.1513 16.0678ZM74.1316 19.0156H73.0125L71.8811 14.6852H71.7959L70.6646 19.0156H69.5697L68.0491 13.1461H69.1439L70.1171 17.62H70.2023L71.3337 13.1331H72.3677L73.4991 17.62H73.5842L74.5574 13.1331H75.6401L74.1316 19.0156ZM76.9053 13.1461H77.9515V14.0722H78.0367C78.3165 13.3809 78.9734 12.9635 79.6668 13.0287C79.9332 13.006 80.2009 13.048 80.45 13.1516C80.6991 13.2552 80.9232 13.4177 81.1056 13.6271C81.2881 13.8365 81.4241 14.0873 81.5035 14.3608C81.583 14.6343 81.6038 14.9236 81.5646 15.207V19.0156H80.4697V15.4939C80.4697 14.5548 80.1047 14.0852 79.3018 14.0852C79.1204 14.0746 78.9389 14.1065 78.7701 14.1786C78.6012 14.2507 78.449 14.3613 78.324 14.5027C78.199 14.6442 78.1042 14.8131 78.0462 14.9978C77.9882 15.1825 77.9683 15.3785 77.988 15.5722V19.0156H76.9053V13.1461ZM83.292 10.8505H84.3625V19.0156H83.2798L83.292 10.8505ZM85.871 16.0678C85.8467 15.6879 85.8955 15.3066 86.0144 14.9477C86.1333 14.5888 86.3197 14.2599 86.5622 13.9815C86.8046 13.7031 87.0978 13.4812 87.4236 13.3294C87.7495 13.1776 88.1009 13.0993 88.4561 13.0993C88.8113 13.0993 89.1628 13.1776 89.4886 13.3294C89.8144 13.4812 90.1076 13.7031 90.35 13.9815C90.5925 14.2599 90.7789 14.5888 90.8978 14.9477C91.0167 15.3066 91.0655 15.6879 91.0412 16.0678C91.0655 16.4478 91.0167 16.8291 90.8978 17.188C90.7789 17.5469 90.5925 17.8758 90.35 18.1541C90.1076 18.4325 89.8144 18.6545 89.4886 18.8063C89.1628 18.958 88.8113 19.0363 88.4561 19.0363C88.1009 19.0363 87.7495 18.958 87.4236 18.8063C87.0978 18.6545 86.8046 18.4325 86.5622 18.1541C86.3197 17.8758 86.1333 17.5469 86.0144 17.188C85.8955 16.8291 85.8467 16.4478 85.871 16.0678ZM89.922 16.0678C89.922 14.8026 89.3867 14.0591 88.4622 14.0591C87.5133 14.0591 86.9902 14.8026 86.9902 16.0678C86.9902 17.3591 87.5133 18.0896 88.45 18.0896C89.3867 18.0896 89.922 17.3461 89.922 16.0678ZM92.1726 17.3461C92.1726 16.3026 92.9025 15.6896 94.2163 15.5983L95.7005 15.507V14.9983C95.7005 14.3852 95.3112 14.0331 94.5691 14.0331C93.9608 14.0331 93.5472 14.2678 93.4377 14.6852H92.3794C92.501 13.6678 93.3769 13.0287 94.6178 13.0287C95.9924 13.0287 96.771 13.7591 96.771 14.9983V19.0156H95.7248V18.1809H95.6396C95.2868 18.7939 94.6664 19.1461 93.9973 19.1069C93.7672 19.1325 93.5347 19.106 93.3147 19.0292C93.0947 18.9524 92.8922 18.8269 92.7202 18.661C92.5483 18.4951 92.4107 18.2923 92.3164 18.0658C92.222 17.8393 92.173 17.5941 92.1726 17.3461ZM95.7005 16.8504V16.3548L94.3623 16.4461C93.608 16.4983 93.2674 16.7852 93.2674 17.2939C93.2674 17.8157 93.6932 18.1287 94.2771 18.1287C94.4495 18.1484 94.6237 18.1307 94.7895 18.0766C94.9553 18.0225 95.1092 17.9331 95.2421 17.8138C95.375 17.6945 95.484 17.5477 95.5628 17.3822C95.6415 17.2167 95.6884 17.0358 95.7005 16.8504ZM98.1943 16.0678C98.1943 14.2157 99.0824 13.0418 100.469 13.0418C101.163 13.0026 101.82 13.407 102.148 14.0722H102.221V10.8505H103.316V19.0156H102.27V18.0896H102.184C101.832 18.7417 101.175 19.133 100.469 19.1069C99.0702 19.1069 98.1943 17.933 98.1943 16.0678ZM99.3135 16.0678C99.3135 17.32 99.8609 18.0635 100.773 18.0635C101.686 18.0635 102.245 17.307 102.245 16.0809C102.245 14.8548 101.674 14.0852 100.773 14.0852C99.8609 14.0852 99.3135 14.8418 99.3135 16.0678ZM107.78 16.0678C107.756 15.6879 107.805 15.3066 107.924 14.9477C108.043 14.5888 108.229 14.2599 108.472 13.9815C108.714 13.7031 109.007 13.4812 109.333 13.3294C109.659 13.1776 110.01 13.0993 110.366 13.0993C110.721 13.0993 111.072 13.1776 111.398 13.3294C111.724 13.4812 112.017 13.7031 112.259 13.9815C112.502 14.2599 112.688 14.5888 112.807 14.9477C112.926 15.3066 112.975 15.6879 112.951 16.0678C112.975 16.4478 112.926 16.8291 112.807 17.188C112.688 17.5469 112.502 17.8758 112.259 18.1541C112.017 18.4325 111.724 18.6545 111.398 18.8063C111.072 18.958 110.721 19.0363 110.366 19.0363C110.01 19.0363 109.659 18.958 109.333 18.8063C109.007 18.6545 108.714 18.4325 108.472 18.1541C108.229 17.8758 108.043 17.5469 107.924 17.188C107.805 16.8291 107.756 16.4478 107.78 16.0678ZM111.831 16.0678C111.831 14.8026 111.296 14.0591 110.372 14.0591C109.423 14.0591 108.9 14.8026 108.9 16.0678C108.9 17.3591 109.423 18.0896 110.359 18.0896C111.296 18.0896 111.831 17.3461 111.831 16.0678ZM114.398 13.1461H115.432V14.0722H115.517C115.797 13.3809 116.454 12.9635 117.16 13.0287C117.425 13.0081 117.691 13.0516 117.939 13.1561C118.187 13.2606 118.409 13.4235 118.59 13.6326C118.771 13.8417 118.906 14.0917 118.985 14.3642C119.064 14.6367 119.084 14.9247 119.045 15.207V19.0156H117.975V15.4939C117.975 14.5548 117.586 14.0852 116.783 14.0852C116.602 14.0766 116.422 14.1099 116.255 14.1828C116.087 14.2558 115.937 14.3667 115.813 14.5079C115.689 14.6492 115.596 14.8174 115.538 15.0011C115.481 15.1848 115.462 15.3796 115.481 15.5722V19.0156H114.386V13.1461H114.398ZM125.164 11.6722V13.1722H126.344V14.1374H125.164V17.1635C125.164 17.7765 125.396 18.0504 125.931 18.0504L126.344 18.0243V18.9896C126.15 19.0287 125.955 19.0417 125.761 19.0417C124.544 19.0417 124.082 18.5852 124.082 17.4635V14.1374H123.206V13.1722H124.082V11.6722H125.164ZM127.816 10.8505H128.899V14.0852H128.984C129.276 13.3939 129.945 12.9635 130.651 13.0418C130.915 13.0259 131.179 13.0728 131.425 13.1789C131.67 13.2851 131.891 13.448 132.071 13.6559C132.251 13.8639 132.386 14.1119 132.467 14.3823C132.547 14.6526 132.571 14.9386 132.537 15.22V19.0026H131.454V15.507C131.454 14.5678 131.04 14.0983 130.286 14.0983C130.1 14.0803 129.912 14.1064 129.736 14.1747C129.56 14.2431 129.4 14.352 129.268 14.4939C129.136 14.6357 129.034 14.807 128.97 14.9956C128.907 15.1841 128.882 15.3854 128.899 15.5852V19.0156H127.816V10.8505ZM138.838 17.4243C138.69 17.9599 138.372 18.4229 137.938 18.7327C137.505 19.0426 136.984 19.1796 136.466 19.12C136.106 19.129 135.748 19.0543 135.417 18.901C135.087 18.7476 134.791 18.5193 134.551 18.2318C134.31 17.9442 134.131 17.6042 134.025 17.2351C133.918 16.8661 133.888 16.4768 133.936 16.0939C133.889 15.7092 133.919 15.3182 134.025 14.9473C134.131 14.5763 134.31 14.234 134.55 13.9435C134.789 13.653 135.085 13.421 135.415 13.2632C135.746 13.1054 136.104 13.0254 136.466 13.0287C137.986 13.0287 138.899 14.1374 138.899 15.9896V16.3809H135.043V16.4591C135.026 16.6748 135.051 16.8918 135.117 17.0964C135.183 17.3009 135.288 17.4884 135.425 17.6469C135.563 17.8053 135.729 17.9312 135.915 18.0164C136.1 18.1016 136.301 18.1443 136.502 18.1417C137.025 18.207 137.536 17.92 137.804 17.4243H138.838ZM135.043 15.5331H137.804C137.818 15.3367 137.793 15.1394 137.731 14.9538C137.67 14.7682 137.573 14.5982 137.448 14.4548C137.322 14.3113 137.17 14.1974 137.001 14.1203C136.832 14.0432 136.65 14.0046 136.466 14.007C136.278 14.0034 136.091 14.0405 135.917 14.1159C135.743 14.1914 135.585 14.3037 135.452 14.4461C135.319 14.5885 135.215 14.7581 135.144 14.9449C135.074 15.1316 135.039 15.3317 135.043 15.5331Z" fill="white"/>
            </svg>
          </a>
          </div>
        </div>
      </div>
        <Svg0Rectangle_1 
          className={css.rectangle}
          color={'#D3844A'}
          />  
    </div>
  )
}

export default Enjoy