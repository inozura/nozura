import React from 'react';
import { HighlightedTextIcon } from 'components/molecules';
import { AboutSectionContentProps } from 'components/organisms/About/types';

const Text = () => (
  <>
    Saat ini saya sedang bekerja sebagai freelance{' '}
    <span className="font-bold text-gray-800">full-stack web developer</span> dan{' '}
    <span className="font-bold text-gray-800">mobile app developer</span>, saya gemar menggunakan
    <HighlightedTextIcon
      as="a"
      href="https://nodejs.org"
      className="mx-2"
      icon={
        <svg width="30" height="28" viewBox="0 0 256 282" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
          <g fill="#8CC84B">
            <path d="M116.504 3.58c6.962-3.985 16.03-4.003 22.986 0 34.995 19.774 70.001 39.517 104.99 59.303 6.581 3.707 10.983 11.031 10.916 18.614v118.968c.049 7.897-4.788 15.396-11.731 19.019-34.88 19.665-69.742 39.354-104.616 59.019-7.106 4.063-16.356 3.75-23.24-.646-10.457-6.062-20.932-12.094-31.39-18.15-2.137-1.274-4.546-2.288-6.055-4.36 1.334-1.798 3.719-2.022 5.657-2.807 4.365-1.388 8.374-3.616 12.384-5.778 1.014-.694 2.252-.428 3.224.193 8.942 5.127 17.805 10.403 26.777 15.481 1.914 1.105 3.852-.362 5.488-1.274 34.228-19.345 68.498-38.617 102.72-57.968 1.268-.61 1.969-1.956 1.866-3.345.024-39.245.006-78.497.012-117.742.145-1.576-.767-3.025-2.192-3.67-34.759-19.575-69.5-39.18-104.253-58.76a3.621 3.621 0 0 0-4.094-.006C91.2 39.257 56.465 58.88 21.712 78.454c-1.42.646-2.373 2.071-2.204 3.653.006 39.245 0 78.497 0 117.748a3.329 3.329 0 0 0 1.89 3.303c9.274 5.259 18.56 10.481 27.84 15.722 5.228 2.814 11.647 4.486 17.407 2.33 5.083-1.823 8.646-7.01 8.549-12.407.048-39.016-.024-78.038.036-117.048-.127-1.732 1.516-3.163 3.2-3 4.456-.03 8.918-.06 13.374.012 1.86-.042 3.14 1.823 2.91 3.568-.018 39.263.048 78.527-.03 117.79.012 10.464-4.287 21.85-13.966 26.97-11.924 6.177-26.662 4.867-38.442-1.056-10.198-5.09-19.93-11.097-29.947-16.55C5.368 215.886.555 208.357.604 200.466V81.497c-.073-7.74 4.504-15.197 11.29-18.85C46.768 42.966 81.636 23.27 116.504 3.58z"/><path d="M146.928 85.99c15.21-.979 31.493-.58 45.18 6.913 10.597 5.742 16.472 17.793 16.659 29.566-.296 1.588-1.956 2.464-3.472 2.355-4.413-.006-8.827.06-13.24-.03-1.872.072-2.96-1.654-3.195-3.309-1.268-5.633-4.34-11.212-9.642-13.929-8.139-4.075-17.576-3.87-26.451-3.785-6.479.344-13.446.905-18.935 4.715-4.214 2.886-5.494 8.712-3.99 13.404 1.418 3.369 5.307 4.456 8.489 5.458 18.33 4.794 37.754 4.317 55.734 10.626 7.444 2.572 14.726 7.572 17.274 15.366 3.333 10.446 1.872 22.932-5.56 31.318-6.027 6.901-14.805 10.657-23.56 12.697-11.647 2.597-23.734 2.663-35.562 1.51-11.122-1.268-22.696-4.19-31.282-11.768-7.342-6.375-10.928-16.308-10.572-25.895.085-1.619 1.697-2.748 3.248-2.615 4.444-.036 8.888-.048 13.332.006 1.775-.127 3.091 1.407 3.182 3.08.82 5.367 2.837 11 7.517 14.182 9.032 5.827 20.365 5.428 30.707 5.591 8.568-.38 18.186-.495 25.178-6.158 3.689-3.23 4.782-8.634 3.785-13.283-1.08-3.925-5.186-5.754-8.712-6.95-18.095-5.724-37.736-3.647-55.656-10.12-7.275-2.571-14.31-7.432-17.105-14.906-3.9-10.578-2.113-23.662 6.098-31.765 8.006-8.06 19.563-11.164 30.551-12.275z"/>
          </g>
        </svg>
      }
    >
      NodeJS
    </HighlightedTextIcon>
      sebagai back-end server, serta{' '} 
    <HighlightedTextIcon
      as="a"
      href="https://reactjs.org"
      className="mx-2"
      icon={
        <svg
          width="30"
          height="27"
          viewBox="0 0 30 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <path
              d="M24.6652 8.75216C24.3461 8.64133 24.0243 8.53842 23.7 8.44342C23.7539 8.22175 23.8039 7.99921 23.85 7.77579C24.5804 4.18696 24.103 1.29478 22.47 0.342155C20.9048 -0.570886 18.3457 0.381738 15.7604 2.65774C15.5057 2.88205 15.257 3.11294 15.0143 3.35044C14.8517 3.19211 14.6865 3.0373 14.5187 2.886C11.8083 0.454306 9.0913 -0.569567 7.46087 0.383057C5.89957 1.29874 5.43652 4.01807 6.0913 7.41954C6.15826 7.75644 6.23217 8.09157 6.31304 8.42495C5.93087 8.53578 5.55913 8.6532 5.20435 8.77855C2.02826 9.90006 0 11.6549 0 13.4757C0 15.3559 2.17826 17.2427 5.48609 18.384C5.75391 18.4772 6.02435 18.5634 6.29739 18.6426C6.2087 19.0006 6.13043 19.3612 6.06261 19.7245C5.43391 23.0666 5.92435 25.7213 7.48435 26.6317C9.09391 27.5711 11.7965 26.6053 14.43 24.2778C14.6387 24.0949 14.8474 23.9005 15.0561 23.6946C15.3187 23.9524 15.5883 24.2022 15.8648 24.4441C18.4161 26.6633 20.9335 27.5579 22.4909 26.6475C24.1017 25.7041 24.6248 22.8528 23.9452 19.3841C23.893 19.1202 23.833 18.8502 23.7652 18.574C23.9548 18.5177 24.1409 18.4592 24.3235 18.3985C27.763 17.2453 30 15.3809 30 13.4757C30 11.647 27.9065 9.88027 24.6652 8.75216ZM16.6043 3.63676C18.8191 1.68665 20.8891 0.918743 21.8348 1.46762C22.8391 2.05345 23.2278 4.41654 22.5965 7.51586C22.5557 7.71817 22.5109 7.91917 22.4622 8.11884C21.1402 7.81573 19.7999 7.60152 18.45 7.4776C17.6765 6.3537 16.8289 5.28385 15.913 4.27536C16.1374 4.05721 16.367 3.84435 16.6017 3.63676H16.6043ZM8.85652 15.0287C9.1287 15.5599 9.41261 16.0833 9.70826 16.5988C10.01 17.1265 10.3239 17.6468 10.65 18.1597C9.72128 18.0581 8.79832 17.9084 7.88478 17.7111C8.15087 16.8442 8.47696 15.943 8.85783 15.03L8.85652 15.0287ZM8.85652 11.9808C8.48348 11.0862 8.16522 10.2062 7.90435 9.35514C8.7587 9.16118 9.67174 9.00285 10.6226 8.88278C10.3043 9.38417 9.99783 9.89434 9.70304 10.4133C9.40739 10.9288 9.12478 11.4513 8.85522 11.9808H8.85652ZM9.53739 13.506C9.93217 12.6748 10.3583 11.8594 10.8157 11.0598C11.2696 10.2594 11.7539 9.47872 12.2687 8.71786C13.1609 8.64925 14.0752 8.6123 15 8.6123C15.9287 8.6123 16.8443 8.64925 17.7365 8.71786C18.2452 9.47872 18.727 10.2572 19.1817 11.0532C19.6391 11.8502 20.0704 12.6616 20.4757 13.4876C20.0757 14.3214 19.6461 15.1404 19.187 15.9443C18.7322 16.743 18.2522 17.5259 17.747 18.2929C16.8574 18.3589 15.9378 18.3906 15 18.3906C14.0661 18.3906 13.1583 18.3615 12.2843 18.3035C11.7661 17.5382 11.2774 16.754 10.8183 15.9509C10.3609 15.1505 9.93391 14.3351 9.53739 13.5047V13.506ZM20.2983 16.5935C20.5991 16.0631 20.8887 15.5265 21.167 14.9838C21.5481 15.8557 21.8842 16.7471 22.1739 17.6543C21.2502 17.864 20.3163 18.0247 19.3761 18.1359C19.6926 17.6275 19.9996 17.1129 20.297 16.5922L20.2983 16.5935ZM21.1539 11.9821C20.8774 11.4508 20.5904 10.9248 20.293 10.4041C19.9991 9.89214 19.6948 9.38637 19.38 8.88674C20.3361 9.00945 21.253 9.17174 22.1152 9.37097C21.8384 10.2576 21.5176 11.1295 21.1539 11.9834V11.9821ZM15.013 5.20555C15.6373 5.89365 16.2267 6.61321 16.7791 7.36149C15.5983 7.30431 14.4165 7.30431 13.2339 7.36149C13.817 6.58303 14.4143 5.85999 15.0143 5.20555H15.013ZM8.10522 1.50457C9.10957 0.917424 11.327 1.75526 13.667 3.8571C13.817 3.99168 13.967 4.13154 14.117 4.27668C13.1958 5.28532 12.3417 6.35464 11.5604 7.4776C10.2145 7.59982 8.87779 7.81005 7.5587 8.10696C7.48217 7.79734 7.41348 7.48508 7.35261 7.17017V7.17281C6.78783 4.25689 7.16217 2.05873 8.10522 1.50721V1.50457ZM6.63913 17.3944C6.3913 17.3223 6.14522 17.2444 5.90087 17.1608C4.62965 16.7563 3.44292 16.1185 2.4 15.2794C2.10155 15.0718 1.84836 14.8046 1.6561 14.4941C1.46383 14.1836 1.33656 13.8366 1.28217 13.4744C1.28217 12.37 2.91 10.9609 5.62565 10.0043C5.96739 9.88291 6.31174 9.77296 6.6587 9.67444C7.06165 10.9828 7.54967 12.2628 8.11957 13.506C7.54246 14.7674 7.04834 16.0659 6.64044 17.3931L6.63913 17.3944ZM13.5861 23.3054C12.6048 24.2159 11.4663 24.936 10.2274 25.4297C9.90105 25.5879 9.5461 25.6769 9.18447 25.6909C8.82283 25.705 8.46218 25.6439 8.12478 25.5115C7.17913 24.9573 6.78522 22.8278 7.3213 19.9699C7.38565 19.6313 7.4587 19.2952 7.54044 18.9619C8.87349 19.2512 10.2244 19.4487 11.5839 19.553C12.3715 20.682 13.2317 21.7574 14.1587 22.7724C13.9726 22.9544 13.7822 23.1317 13.5874 23.3041L13.5861 23.3054ZM15.0496 21.8382C14.4417 21.1759 13.8365 20.4423 13.2443 19.6532C13.8183 19.6761 14.4035 19.6875 15 19.6875C15.6113 19.6875 16.2148 19.6744 16.8104 19.648C16.2608 20.408 15.6731 21.139 15.0496 21.8382ZM22.8326 23.6419C22.805 24.0072 22.7036 24.3629 22.5346 24.6869C22.3657 25.011 22.1328 25.2966 21.8504 25.526C20.9048 26.0802 18.883 25.3597 16.7022 23.4624C16.4526 23.246 16.2013 23.0147 15.9483 22.7684C16.8575 21.7503 17.6976 20.6712 18.463 19.5385C19.8301 19.4218 21.1877 19.2102 22.5261 18.9051C22.587 19.1549 22.6409 19.3995 22.6878 19.6387C22.9781 20.9533 23.0268 22.3108 22.8313 23.6432L22.8326 23.6419ZM23.9204 17.1674C23.7548 17.2229 23.5865 17.2756 23.4143 17.3258C22.9951 16.0112 22.4878 14.7271 21.8961 13.4823C22.466 12.2544 22.954 10.9893 23.357 9.69555C23.6622 9.78395 23.9609 9.88027 24.2478 9.97923C27.0261 10.945 28.7191 12.3753 28.7191 13.4757C28.7191 14.65 26.8891 16.1726 23.9191 17.1674H23.9204Z"
              fill="#61DAFB"
            />
            <path
              d="M15 10.7652C15.53 10.7652 16.0481 10.9242 16.4887 11.2221C16.9293 11.52 17.2727 11.9434 17.4754 12.4388C17.6781 12.9341 17.731 13.4792 17.6275 14.0049C17.5239 14.5307 17.2684 15.0136 16.8935 15.3925C16.5186 15.7714 16.0409 16.0293 15.5211 16.1336C15.0012 16.2379 14.4624 16.1838 13.9729 15.9783C13.4834 15.7728 13.0652 15.425 12.7711 14.979C12.477 14.533 12.3204 14.0087 12.3209 13.4726C12.3219 12.7545 12.6046 12.0662 13.1069 11.5589C13.6093 11.0515 14.2901 10.7665 15 10.7665"
              fill="#61DAFB"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="30" height="27" fill="white" />
            </clipPath>
          </defs>
        </svg>
      }
    >
      ReactJS
    </HighlightedTextIcon>
    {' '}sebagai front-end web dan{' '} 
    <HighlightedTextIcon
      as="a"
      href="https://reactnative.dev/"
      className="mx-2"
      icon={
        <svg
          width="30"
          height="27"
          viewBox="0 0 30 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <path
              d="M24.6652 8.75216C24.3461 8.64133 24.0243 8.53842 23.7 8.44342C23.7539 8.22175 23.8039 7.99921 23.85 7.77579C24.5804 4.18696 24.103 1.29478 22.47 0.342155C20.9048 -0.570886 18.3457 0.381738 15.7604 2.65774C15.5057 2.88205 15.257 3.11294 15.0143 3.35044C14.8517 3.19211 14.6865 3.0373 14.5187 2.886C11.8083 0.454306 9.0913 -0.569567 7.46087 0.383057C5.89957 1.29874 5.43652 4.01807 6.0913 7.41954C6.15826 7.75644 6.23217 8.09157 6.31304 8.42495C5.93087 8.53578 5.55913 8.6532 5.20435 8.77855C2.02826 9.90006 0 11.6549 0 13.4757C0 15.3559 2.17826 17.2427 5.48609 18.384C5.75391 18.4772 6.02435 18.5634 6.29739 18.6426C6.2087 19.0006 6.13043 19.3612 6.06261 19.7245C5.43391 23.0666 5.92435 25.7213 7.48435 26.6317C9.09391 27.5711 11.7965 26.6053 14.43 24.2778C14.6387 24.0949 14.8474 23.9005 15.0561 23.6946C15.3187 23.9524 15.5883 24.2022 15.8648 24.4441C18.4161 26.6633 20.9335 27.5579 22.4909 26.6475C24.1017 25.7041 24.6248 22.8528 23.9452 19.3841C23.893 19.1202 23.833 18.8502 23.7652 18.574C23.9548 18.5177 24.1409 18.4592 24.3235 18.3985C27.763 17.2453 30 15.3809 30 13.4757C30 11.647 27.9065 9.88027 24.6652 8.75216ZM16.6043 3.63676C18.8191 1.68665 20.8891 0.918743 21.8348 1.46762C22.8391 2.05345 23.2278 4.41654 22.5965 7.51586C22.5557 7.71817 22.5109 7.91917 22.4622 8.11884C21.1402 7.81573 19.7999 7.60152 18.45 7.4776C17.6765 6.3537 16.8289 5.28385 15.913 4.27536C16.1374 4.05721 16.367 3.84435 16.6017 3.63676H16.6043ZM8.85652 15.0287C9.1287 15.5599 9.41261 16.0833 9.70826 16.5988C10.01 17.1265 10.3239 17.6468 10.65 18.1597C9.72128 18.0581 8.79832 17.9084 7.88478 17.7111C8.15087 16.8442 8.47696 15.943 8.85783 15.03L8.85652 15.0287ZM8.85652 11.9808C8.48348 11.0862 8.16522 10.2062 7.90435 9.35514C8.7587 9.16118 9.67174 9.00285 10.6226 8.88278C10.3043 9.38417 9.99783 9.89434 9.70304 10.4133C9.40739 10.9288 9.12478 11.4513 8.85522 11.9808H8.85652ZM9.53739 13.506C9.93217 12.6748 10.3583 11.8594 10.8157 11.0598C11.2696 10.2594 11.7539 9.47872 12.2687 8.71786C13.1609 8.64925 14.0752 8.6123 15 8.6123C15.9287 8.6123 16.8443 8.64925 17.7365 8.71786C18.2452 9.47872 18.727 10.2572 19.1817 11.0532C19.6391 11.8502 20.0704 12.6616 20.4757 13.4876C20.0757 14.3214 19.6461 15.1404 19.187 15.9443C18.7322 16.743 18.2522 17.5259 17.747 18.2929C16.8574 18.3589 15.9378 18.3906 15 18.3906C14.0661 18.3906 13.1583 18.3615 12.2843 18.3035C11.7661 17.5382 11.2774 16.754 10.8183 15.9509C10.3609 15.1505 9.93391 14.3351 9.53739 13.5047V13.506ZM20.2983 16.5935C20.5991 16.0631 20.8887 15.5265 21.167 14.9838C21.5481 15.8557 21.8842 16.7471 22.1739 17.6543C21.2502 17.864 20.3163 18.0247 19.3761 18.1359C19.6926 17.6275 19.9996 17.1129 20.297 16.5922L20.2983 16.5935ZM21.1539 11.9821C20.8774 11.4508 20.5904 10.9248 20.293 10.4041C19.9991 9.89214 19.6948 9.38637 19.38 8.88674C20.3361 9.00945 21.253 9.17174 22.1152 9.37097C21.8384 10.2576 21.5176 11.1295 21.1539 11.9834V11.9821ZM15.013 5.20555C15.6373 5.89365 16.2267 6.61321 16.7791 7.36149C15.5983 7.30431 14.4165 7.30431 13.2339 7.36149C13.817 6.58303 14.4143 5.85999 15.0143 5.20555H15.013ZM8.10522 1.50457C9.10957 0.917424 11.327 1.75526 13.667 3.8571C13.817 3.99168 13.967 4.13154 14.117 4.27668C13.1958 5.28532 12.3417 6.35464 11.5604 7.4776C10.2145 7.59982 8.87779 7.81005 7.5587 8.10696C7.48217 7.79734 7.41348 7.48508 7.35261 7.17017V7.17281C6.78783 4.25689 7.16217 2.05873 8.10522 1.50721V1.50457ZM6.63913 17.3944C6.3913 17.3223 6.14522 17.2444 5.90087 17.1608C4.62965 16.7563 3.44292 16.1185 2.4 15.2794C2.10155 15.0718 1.84836 14.8046 1.6561 14.4941C1.46383 14.1836 1.33656 13.8366 1.28217 13.4744C1.28217 12.37 2.91 10.9609 5.62565 10.0043C5.96739 9.88291 6.31174 9.77296 6.6587 9.67444C7.06165 10.9828 7.54967 12.2628 8.11957 13.506C7.54246 14.7674 7.04834 16.0659 6.64044 17.3931L6.63913 17.3944ZM13.5861 23.3054C12.6048 24.2159 11.4663 24.936 10.2274 25.4297C9.90105 25.5879 9.5461 25.6769 9.18447 25.6909C8.82283 25.705 8.46218 25.6439 8.12478 25.5115C7.17913 24.9573 6.78522 22.8278 7.3213 19.9699C7.38565 19.6313 7.4587 19.2952 7.54044 18.9619C8.87349 19.2512 10.2244 19.4487 11.5839 19.553C12.3715 20.682 13.2317 21.7574 14.1587 22.7724C13.9726 22.9544 13.7822 23.1317 13.5874 23.3041L13.5861 23.3054ZM15.0496 21.8382C14.4417 21.1759 13.8365 20.4423 13.2443 19.6532C13.8183 19.6761 14.4035 19.6875 15 19.6875C15.6113 19.6875 16.2148 19.6744 16.8104 19.648C16.2608 20.408 15.6731 21.139 15.0496 21.8382ZM22.8326 23.6419C22.805 24.0072 22.7036 24.3629 22.5346 24.6869C22.3657 25.011 22.1328 25.2966 21.8504 25.526C20.9048 26.0802 18.883 25.3597 16.7022 23.4624C16.4526 23.246 16.2013 23.0147 15.9483 22.7684C16.8575 21.7503 17.6976 20.6712 18.463 19.5385C19.8301 19.4218 21.1877 19.2102 22.5261 18.9051C22.587 19.1549 22.6409 19.3995 22.6878 19.6387C22.9781 20.9533 23.0268 22.3108 22.8313 23.6432L22.8326 23.6419ZM23.9204 17.1674C23.7548 17.2229 23.5865 17.2756 23.4143 17.3258C22.9951 16.0112 22.4878 14.7271 21.8961 13.4823C22.466 12.2544 22.954 10.9893 23.357 9.69555C23.6622 9.78395 23.9609 9.88027 24.2478 9.97923C27.0261 10.945 28.7191 12.3753 28.7191 13.4757C28.7191 14.65 26.8891 16.1726 23.9191 17.1674H23.9204Z"
              fill="#61DAFB"
            />
            <path
              d="M15 10.7652C15.53 10.7652 16.0481 10.9242 16.4887 11.2221C16.9293 11.52 17.2727 11.9434 17.4754 12.4388C17.6781 12.9341 17.731 13.4792 17.6275 14.0049C17.5239 14.5307 17.2684 15.0136 16.8935 15.3925C16.5186 15.7714 16.0409 16.0293 15.5211 16.1336C15.0012 16.2379 14.4624 16.1838 13.9729 15.9783C13.4834 15.7728 13.0652 15.425 12.7711 14.979C12.477 14.533 12.3204 14.0087 12.3209 13.4726C12.3219 12.7545 12.6046 12.0662 13.1069 11.5589C13.6093 11.0515 14.2901 10.7665 15 10.7665"
              fill="#61DAFB"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="30" height="27" fill="white" />
            </clipPath>
          </defs>
        </svg>
      }
    >
      React Native
    </HighlightedTextIcon>
    {' '} sebagai cross-platform mobile app
    . Saya juga seorang mahasiswa aktif di Universitas Muria Kudus.
  </>
);

const about: AboutSectionContentProps = {
  text: <Text />,
};

export default about;
