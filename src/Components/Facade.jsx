import React from 'react';
import { Link } from "react-router-dom";
import '../Styles/Facade.scss';


const Facade = () => {


  return (
    <div className='facade'>
      <div className="handwriting">
        <svg preserveAspectRatio="xMidYMin" stroke-width="14" outline="0" width="100%" height="100%" version="1.1" viewBox="0 0 508 200" xmlns="http://www.w3.org/2000/svg" style={{margin: "auto", display: "block"}}>
            <clipPath id="clipPath103513">
              <path d="m61.741 143.6q-8.083 0-14.593-3.3091-6.4555-3.3091-11.012-9.2222-4.5568-5.9673-6.998-14.159-2.4412-8.2457-2.4412-18.065 0-5.2078 0.75947-10.687 0.75947-5.4791 2.2784-10.904 1.5732-5.4791 3.8516-10.687 2.3327-5.2621 5.3706-9.9274 3.0921-4.6653 6.8895-8.5712 3.7974-3.9601 8.3542-6.781 4.6111-2.8751 9.8731-4.4483 5.3163-1.6274 11.392-1.6274 8.1372 0 14.538 2.9294 6.4555 2.9294 10.85 8.1915 4.4483 5.2621 6.781 12.586 2.3869 7.2692 2.3869 16.057 0 7.2692-1.4647 15.189-1.4104 7.866-4.1771 15.515-2.7666 7.5947-6.8895 14.484-4.1229 6.8895-9.4934 12.097-5.3706 5.2078-11.989 8.2457-6.564 3.0921-14.267 3.0921zm1.302-13.237q4.3398 0 8.083-1.6817t6.8353-4.6111q3.1464-2.9294 5.696-6.8353 2.6039-3.9601 4.6111-8.4627 2.0072-4.5026 3.4719-9.3307 1.5189-4.8281 2.4954-9.5477t1.4104-9.0594q0.48823-4.3941 0.48823-7.9745 0-5.2078-1.1392-9.7646-1.1392-4.6111-3.4719-7.9745-2.2784-3.4176-5.8045-5.3706-3.4719-1.9529-8.1372-1.9529-4.9908 0-9.6562 2.4412-4.6653 2.3869-8.7882 6.5098-4.1229 4.0686-7.5405 9.4934-3.4176 5.3706-5.8588 11.338-2.4412 5.9673-3.7974 12.152t-1.3562 11.826q0 6.13 1.5189 11.446 1.5732 5.2621 4.4483 9.1137 2.9294 3.8516 7.0522 6.0758 4.1771 2.1699 9.4392 2.1699z"/>
              <path d="m138.23 123.53q5.479 0 9.9816-1.085t8.1372-2.9294q3.6889-1.8444 6.6183-4.2856 2.9836-2.4954 5.3706-5.3163l0.59673 12.423q-1.7359 2.1157-4.2314 4.1228-2.4412 1.9529-5.3706 3.4719-2.9294 1.4647-6.1843 2.3869-3.2006 0.86797-6.347 0.86797-0.37974 0-0.97647-0.1085-0.54248-0.1085-1.9529-0.37974t-4.0686-0.70522q-2.6039-0.48823-7.1065-1.1392v0.97647q0 9.8731-1.6817 17.902-1.6274 8.083-4.3941 13.779-2.7666 5.696-6.347 8.7882-3.5804 3.0921-7.432 3.0921-3.0921 0-5.1536-1.519-2.0614-1.5189-3.2549-4.1228-1.2477-2.5497-1.7359-6.0215-0.54248-3.4176-0.54248-7.2692 0-2.2242 0.70522-5.0451 0.70523-2.7666 1.8987-5.8588 1.1935-3.0379 2.7124-6.2385 1.4647-3.1464 3.0379-6.13 3.6889-6.9438 8.4084-14.321 0.59673-4.2313 1.1935-8.6797 0.65098-4.4483 1.5732-8.6254 0.97647-4.1771 2.9294-8.7339 2.0072-4.6111 4.2314-7.3777 2.2784-2.7666 5.4248-4.3941 3.1464-1.6274 7.5947-1.6274 3.3091 0 6.1843 0.92222 2.8752 0.86797 5.0451 2.8751 2.1699 2.0072 3.4176 5.2078 1.2477 3.1464 1.2477 7.7575 0 5.0993-1.085 7.9745-1.6274 4.2856-4.2313 7.432-2.5497 3.1464-6.13 5.913-3.5261 2.7124-8.4084 4.8823zm-6.8353-5.479q3.2549-1.6274 5.6418-3.6346 2.2784-2.0072 4.0144-4.2856 0.70522-0.1085 3.3634-4.9908 1.7902-4.1771 2.2784-6.4013 0.27124-1.1935 0.32549-2.7667 0.1085-1.6274-0.32549-3.0379-0.37973-1.4104-1.4104-2.3869-0.97646-1.0307-2.7666-1.0307-2.0072 0-3.5261 1.1392-1.519 1.085-2.6582 2.9836-1.085 1.8987-1.8444 4.5026-0.70522 2.6039-1.7359 6.4555-0.97646 3.7974-1.1934 7.0522-0.16275 3.2006-0.16275 6.4013zm-18.878 39.059q0 0.43398 0.16275 1.4104 0.21699 0.97647 0.65097 1.9529 0.43399 0.97647 1.1392 1.7359 0.70523 0.75947 1.7359 0.75947 0.92222 0 1.519-1.0307 0.59672-0.97646 0.97646-2.6582t0.54248-3.7974q0.16275-2.1157 0.27124-4.3398 0.1085-2.2242 0.1085-4.3398 0.0542-2.1157 0.16274-3.7974 0.16275-2.9294 0.21699-4.9908 0.1085-2.0072 0.16275-3.3634 0.0542-1.5189 0.10849-2.5496-1.0307 1.7902-2.0072 4.1228-0.97647 2.3869-1.8444 4.9366t-1.5732 5.0993q-0.70523 2.5496-1.2477 4.7196-0.48823 2.2242-0.81372 3.7974-0.27124 1.6274-0.27124 2.3327z"/>
              <path d="m207.99 121.03q-5.2078 3.0379-9.2764 5.3163-4.0686 2.2784-7.2692 3.7974-3.1464 1.5189-5.6418 2.2784-2.4412 0.75948-4.4483 0.75948-4.1228 0-7.2692-2.4954t-5.2621-7.1608q-2.1157-4.7196-3.2006-11.392-1.0307-6.6725-1.0307-15.027 0-3.2549 0.27124-6.9438t0.75948-7.3235q-1.6274-0.21699-2.5497-0.37974-0.86797-0.21699-1.8987-0.37974-0.97647-0.21699-2.5497-0.43398-1.519-0.21699-4.4483-0.54248-1.302-0.16274-2.0072-0.59673-0.70522-0.48823-1.0307-1.085-0.32549-0.65098-0.37974-1.302-0.0542-0.70522-0.0542-1.1935 0-1.085 1.085-1.6274 1.0307-0.59673 2.7124-0.86797 1.6274-0.27124 3.5804-0.27124 2.0072-0.05425 3.7974 0 1.8444 0.05425 3.2549 0.1085 1.4647 0 2.0072-0.1085 1.4647-7.3235 3.6889-14.159 2.2784-6.8895 5.0451-12.206 2.8209-5.3706 6.13-8.5712 3.3091-3.2549 6.9438-3.2549 2.3327 0 4.2313 1.302 1.9529 1.302 3.3091 3.4719t2.0614 5.0993q0.75947 2.8751 0.75947 6.0215 0 2.6582-0.75947 5.6418-0.75947 2.9294-2.0614 6.0215-1.302 3.0379-3.0921 6.1843-1.7359 3.1464-3.6889 6.2385 0.48823 0.05425 1.6274 0.05425t2.6039 0.1085q1.5189 0.05425 3.2549 0.16274 1.7359 0.05425 3.3634 0.1085 1.6274 0.05425 3.0379 0.1085 1.4104 0.05425 2.3327 0.1085 1.085 0.05425 1.5732 1.085 0.48823 1.0307 0.48823 2.6039 0 1.8987-1.085 3.0921t-2.3869 1.1935h-20.831q-1.5732 2.1699-3.2006 4.2856-1.5732 2.0614-2.9294 3.7431-0.217 3.3634-0.37974 6.6183-0.0542 1.4104-0.1085 2.9294-0.0542 1.4647-0.10849 2.9294-0.0542 1.4647-0.1085 2.8209 0 1.3562 0 2.4954 0 2.9294 0.54248 4.9366t1.5732 3.3091q1.0307 1.2477 2.4954 1.8444 1.519 0.54248 3.3634 0.54248 1.1392 0 2.8209-0.54248 1.7359-0.54248 3.7431-1.4647 2.0614-0.97647 4.2856-2.2784 2.2784-1.302 4.4483-2.8209 2.2242-1.5732 4.2314-3.2549 2.0072-1.7359 3.6346-3.5261zm-17.359-68.678q0-0.59673-0.10849-1.302-0.0542-0.75947-0.32549-1.4104-0.27124-0.65098-0.86797-1.085-0.54248-0.43398-1.5732-0.43398-1.4104 0-2.8752 2.4954-1.4104 2.4954-2.7666 6.4013-1.302 3.8516-2.4954 8.5169-1.1392 4.6653-2.1157 9.0594 0.81372 0.1085 1.6274 0.21699 0.81372 0.05425 1.6817 0.16274 1.6274-2.7666 3.3634-5.9673 1.7902-3.2549 3.2006-6.347 1.4104-3.1464 2.3327-5.8588 0.92221-2.7124 0.92221-4.4483z"/>
              <path d="m236.74 121.63q-1.9529 1.7902-4.8823 3.8516-2.8751 2.0072-6.2385 3.7431-3.3634 1.6817-6.8895 2.8209-3.4719 1.1392-6.6183 1.1392-2.8209 0-4.7738-0.75948-1.8987-0.81372-3.0921-2.2242-1.1935-1.4104-1.7359-3.4176-0.48823-2.0614-0.48823-4.5026 0-3.4176 0.75947-7.9745 1.519-8.7882 1.9529-9.8732 0.75947-2.3869 3.0379-10.578 1.8444-6.8353 2.2784-8.8967 0.27124-1.3562 1.5189-2.4412 1.1392-0.97646 2.5497-1.5732 1.4647-0.65098 2.9836-0.92222 1.5732-0.32549 2.8209-0.32549 2.2784 0 3.0921 0.86797 0.81372 0.81372 0.81372 2.2242 0 1.1935-0.54248 3.4719-0.54248 2.2242-1.3562 5.0993-0.81372 2.8209-2.0614 6.8353-1.2477 3.9601-2.0614 7.2692-0.81372 3.2549-1.3562 6.4013-0.54248 3.0921-0.54248 5.5876 0 2.4412 0.54248 3.9059 0.54248 1.4104 2.2242 1.4104 1.9529 0 4.3398-1.3562 2.3869-1.3562 4.8281-3.2549 2.4412-1.9529 4.7738-4.0144 2.3327-2.0614 4.1228-3.5261zm-24.249-56.852q0-1.2477 0.54248-2.8209 0.54248-1.5732 1.7359-2.9294 1.2477-1.4104 3.2549-2.3327 2.0614-0.97646 5.0993-0.97646 1.8987 0 3.5804 0.43398 1.6817 0.43398 2.9294 1.3562 1.2477 0.86797 1.9529 2.3327 0.75948 1.4647 0.75948 3.4719 0 1.8444-0.59673 3.5804-0.59673 1.7359-1.8987 3.0921-1.302 1.3562-3.3091 2.2242-1.9529 0.81372-4.7196 0.81372-4.7738 0-7.0522-2.2242-2.2784-2.2784-2.2784-6.0215z"/>
              <path d="m244.18 183.52q3.4176 0 6.2928-1.085t4.9366-2.8209q2.0614-1.7359 3.6889-4.2856 1.6817-2.4954 2.7124-5.0451 1.0307-2.4954 1.7902-5.5333 0.81372-2.9836 1.1934-5.3706 0.37974-2.3327 0.59673-4.8823 0.1085-1.085 0.32549-3.0921 0.65098-6.998 1.1935-9.5477 0.54248-2.5496 2.0072-3.5261 2.3327-1.5732 7.5405-4.9366 0.27124-0.16275 0.75948-0.48823 2.7124-2.1157 6.6183-6.0215 3.8516-3.9601 5.3706-6.998l-3.5261-12.043q-8.083 13.128-14.484 17.956-1.7902 1.3562-3.3634 2.2784 0.81372-8.5169 1.1935-13.833t1.5732-9.6562q1.2477-4.3398 1.4104-7.2692 0.48824-9.4392-0.16274-11.121-0.37974-0.97646-0.70522-1.5732-0.92222-1.4647-3.3634-1.4647l-2.3869 0.05425q-0.70522 0-1.2477-0.05425t-0.97647-0.21699q-0.43398-0.16274-0.70522-0.21699-0.27124-0.1085-0.59673-0.43398-0.32549-0.32549-0.48823-0.43398-0.1085-0.1085-0.43399-0.54248-0.32549-0.48823-0.48823-0.65098-1.302-1.5732-4.1228-1.5732-6.2385 0-12.857 5.913-4.5568 4.0686-7.432 9.6019-2.8752 5.4791-5.696 13.942-3.0921 9.0594 0.16275 15.84 1.7902 3.7974 5.3163 6.347 3.5804 2.5497 7.8117 2.5497 5.7503 0 11.826-5.8045l-1.085 6.5098q-3.4176 2.9836-5.913 5.5333-2.4412 2.6039-6.2385 6.8895-1.8444 2.0614-3.6346 4.6111-1.7359 2.6039-2.5497 4.0144-0.75947 1.4104-2.8209 4.9908-3.5804 6.4013-3.1464 12.097 0.27124 3.0379 1.4647 5.3163 1.2477 2.2784 3.2006 3.5261 2.0072 1.302 4.3398 1.8987 2.3327 0.65097 5.0993 0.65097zm-1.3562-73.452q0.48824-3.2006 5.6418-12.206 4.7738-8.4627 11.067-8.4627l-4.0686 18.065q-0.21699 4.7196-2.1157 9.3849-2.4412 5.913-6.13 5.913-2.1157 0-3.4176-2.2784-2.0072-3.5261-0.97647-10.416zm11.718 36.997q-0.0542 0.75947-0.32549 3.4719-0.27124 2.7666-0.59672 4.6653-0.27124 1.8987-0.75948 3.4719-0.81372 2.9294-1.4104 4.6653-0.59672 1.7902-1.3562 3.6346-0.70522 1.8444-1.3562 2.8209-0.65097 0.97646-1.5189 1.7902-0.86797 0.86797-1.8987 1.1935-0.97647 0.32549-2.2784 0.32549-3.6346 0-1.8444-5.1536 2.1699-6.1843 5.8588-12.206 3.6889-5.9673 7.4862-8.6797z"/>
              <path d="m285.57 121.84q0-2.3869 0.27124-5.5333 0.27124-3.2006 0.70522-6.7268 0.48823-3.5261 1.085-7.1608 0.65098-3.6889 1.6274-7.8117 0.97647-4.1771 1.6817-6.9438 0.70523-2.7666 1.4104-4.5568 0.43399-1.1935 0.86797-1.8987 0.43398-0.70522 0.97647-1.085 0.59672-0.43398 1.4104-0.54248 0.86797-0.16274 2.1157-0.16274 1.4104 0 2.1699 0.16274 0.81372 0.1085 1.1935 0.65098 0.37973 0.48823 0.43398 1.4647 0.1085 0.97646 0.1085 2.6582 0 2.0072-0.27124 5.696t-0.16275 6.4555h0.59673q1.085-2.1699 2.7124-5.696 1.6274-3.5261 3.4176-5.8588 1.7902-2.3327 4.0686-3.9059 2.2784-1.6274 5.2621-1.6274 1.0307 0 2.0072 0.37974 0.97647 0.32549 1.6817 0.97646 0.75947 0.65098 1.1935 1.6274 0.43398 0.92222 0.43398 2.1157 0 0.92222-0.27124 2.6039-0.27124 1.6274-0.86797 4.2856-0.59672 2.6582-0.86796 4.3941-0.27124 1.6817-0.27124 2.8209 0 1.9529 0.37973 3.2549 0.37974 1.302 0.97647 2.1157 0.65097 0.75947 1.4104 1.085 0.81372 0.32549 1.6817 0.32549 2.4412 0 5.0451-1.085 2.6039-1.085 4.7738-2.4412 2.5497-1.5732 4.9908-3.5804l-0.81372 12.694q-1.4104 0.92221-3.2006 2.0614-1.7902 1.1392-3.8516 2.1699-2.0072 0.97647-4.2314 1.6817-2.1699 0.65098-4.4483 0.65098-4.0686 0-6.564-1.6274-2.4954-1.6817-3.9601-4.3398-1.4647-2.7124-2.1699-6.0215-0.70523-3.3634-1.1392-6.781h-0.86797l-9.7104 27.07q-0.75948 2.1157-1.4647 3.5261-0.65098 1.3562-1.3562 2.2242-0.70523 0.86797-1.519 1.2477-0.81372 0.32549-1.7902 0.32549-2.2242 0-3.5804-0.92222-1.3562-0.97646-2.1157-2.5497-0.70522-1.6274-0.97646-3.6346-0.21699-2.0614-0.21699-4.2313z"/>
              <path d="m389.07 119.89q-1.2477 1.7359-3.3634 4.0686-2.0614 2.3327-4.6653 4.4483-2.6039 2.1157-5.5876 3.5804-2.9836 1.4647-5.9673 1.4647-3.5804 0-5.9673-2.2784-2.3869-2.3327-4.1228-6.7268-1.302 1.519-3.2006 3.0921t-4.1771 2.8752q-2.2242 1.2477-4.6653 2.0614-2.4412 0.81372-4.8823 0.81372-2.6039 0-5.0993-1.0307-2.4412-1.085-4.3398-3.0379-1.8987-2.0072-3.0379-4.8281-1.1392-2.8751-1.1392-6.4555 0-4.0686 1.1392-8.3542 1.1392-4.2856 3.5261-9.2764 2.3869-4.9908 5.0993-8.6254 2.7666-3.6346 6.0215-6.347 3.2549-2.7124 6.8353-4.2856 3.6346-1.6274 7.3777-1.6274 1.2477 0 1.9529 0.48823 0.70523 0.48823 1.1392 1.1392 0.48823 0.59673 0.92222 1.1935 0.43398 0.59673 1.085 0.86797 0.65097 0.27124 1.302 0.37974 0.70522 0.05425 1.4104 0.05425 0.59673 0 1.1935 0 0.65097-0.05425 1.2477-0.05425 0.81372 0 1.519 0.16274 0.70522 0.16274 1.2477 0.70522 0.54248 0.54248 0.81372 1.5189 0.32549 0.97646 0.32549 2.6582 0 2.6039-0.54248 5.8045-0.54248 3.1464-1.1935 6.5098-0.65097 3.3091-1.5732 7.5405t-0.92222 7.215q0 2.5497 0.43399 4.0144 0.48823 1.4104 2.0072 1.4104 1.1392 0 2.3869-0.54248 1.2477-0.59672 2.4954-1.5189 1.302-0.92222 2.5497-2.0614 1.302-1.1934 2.4412-2.4412 2.6582-2.9294 5.3706-6.6183zm-46.328-4.2856q0 1.3562 0.16275 2.6582 0.21699 1.2477 0.70522 2.2784 0.48823 0.97647 1.302 1.6274 0.81372 0.59673 2.0614 0.59673 2.0072 0 3.6346-1.7359 1.6274-1.7359 2.8209-4.1771 1.1934-2.4412 1.8987-5.0451 0.75947-2.6039 0.97646-4.3398l4.0686-17.739q-2.2242 0-4.3398 1.1392-2.1157 1.085-4.0144 2.9836-1.8444 1.8987-3.4176 4.3398-1.5732 2.4412-3.0921 6.0215-1.5189 3.5804-2.1699 6.2928-0.59673 2.7124-0.59673 5.0993z"/>
              <path d="m407.52 123.04q0-0.70522 0.1085-2.0072 0.10849-1.302 0.32548-2.9836 0.217-1.6817 0.48824-3.5261 0.27124-1.8987 0.54248-3.7431 0.59672-4.3398 1.4647-9.3307h-0.81372q-0.65097 0.81372-1.5189 2.4412-0.81372 1.6274-2.3327 4.7738-1.5189 3.1464-3.9059 8.1915-2.3327 4.9908-6.0758 12.531-1.085 2.2242-2.5497 3.0379-1.4104 0.75948-3.1464 0.75948-2.2242 0-3.5804-0.92222-1.3562-0.97646-2.1157-2.5497-0.70522-1.6274-0.97646-3.6346-0.217-2.0614-0.217-4.2313 0-2.2242 0.27124-5.2621 0.27124-3.0379 0.70523-6.4013 0.43398-3.3634 1.2477-7.649 0.86797-4.3398 1.4647-7.5405 0.65098-3.2006 1.302-5.8588 0.65098-2.6582 1.1935-4.3398 0.54248-1.7359 1.0307-2.7667 0.48824-1.0307 1.085-1.5732 0.65097-0.59673 1.5189-0.75947 0.86797-0.21699 2.2242-0.21699 2.0614 0 3.2006 0.16274 1.1934 0.1085 1.7359 0.65098 0.59673 0.48823 0.70523 1.4647 0.10849 0.97646 0.10849 2.6582 0 0.92222-0.10849 2.1157-0.0543 1.1935-0.21699 2.5497-0.1085 1.3562-0.32549 2.7667-0.37974 2.7124-0.43399 2.8209-0.75947 3.6889-1.5732 8.2457l0.59673 0.65097q0.10849-0.16274 1.4104-2.8751 1.3562-2.7124 2.8751-5.3706 1.5732-2.6582 3.3634-5.5333 1.7902-2.9294 3.4176-5.1536 1.5732-2.2242 3.3091-3.6889 1.7902-1.4647 4.2314-1.4647 2.2784 0 3.9059 1.3562 1.6274 1.302 1.6274 3.7431 0 2.1157-0.27124 4.0144-0.32549 2.4412-0.65098 3.6889-0.37973 1.4104-0.86797 3.4719-0.37973 1.7902-1.3562 5.1536-0.16274 0.54248-0.32549 1.5732-0.0542 0.32549-0.0542 0.43399l0.59672 0.65097q0.1085-0.16274 1.519-2.8209 1.4104-2.7124 3.0379-5.3706 1.6817-2.6582 3.5261-5.5875 1.8987-2.9294 3.5261-5.1536 1.5732-2.1699 3.1464-3.6346 1.5732-1.5189 3.8516-1.5189 2.5497 0 4.2856 1.3562 1.7902 1.302 1.7902 3.7431 0 3.7431-0.37973 7.1065-0.37974 3.3634-1.1392 7.432-0.75947 4.0686-1.1392 7.432-0.37974 3.3091-0.37974 7.0522 0 2.9294 0.75948 4.7738 0.75947 1.8444 1.8444 1.8444 1.1392 0 2.3869-0.48823 1.2477-0.48823 2.5497-1.2477 1.302-0.75948 2.5497-1.7359 1.2477-1.0307 2.3869-2.1157 2.6582-2.4954 5.2621-5.6418l0.92221 12.803q-2.3869 1.8987-4.7738 3.9601-2.3327 2.0072-4.9908 3.6889-2.6039 1.6274-5.7503 2.7124-3.1464 1.0307-7.1065 1.0307-1.9529 0-3.3091-1.2477-1.302-1.302-2.1157-3.5804t-1.1934-5.3706q-0.32549-3.0921-0.32549-6.7268 0-3.4176 0.21699-7.215 0.27124-3.8516 0.70522-7.7575h-0.81372l-11.012 28.046q-1.4104 2.2784-3.1464 3.0921-1.7359 0.75948-4.0144 0.75948-1.7359 0-2.7666-0.92222-1.0307-0.97646-1.6274-2.4412-0.54248-1.519-0.75948-3.3091-0.16274-1.7902-0.16274-3.4719z"/>       
            
            </clipPath>
          <path class="text" d="m34.584 86.585 9.3447-23.098c2.898-4.8498 3.975-6.9259 9.0997-12.108 4.0803-5.2548 9.4124-6.686 14.525-8.7872l18.165 0.47564 12.152 11.697c2.4201 7.0933 5.0356 15.765 3.48 17.85l-1.285 18.668-4.2124 15.232-7.5766 15.979-10.591 10.393-12.093 5.48-12.19-0.81534-10.414-6.5276-7.6692-11.006-2.1806-15.626 0.90425-13.818 4.2629-16.503-14.819-11.696 30.575-32.975 64.266-1.1389-1.2446 58.947-7.51 32.698 10.198 5.516-9.4242 15.8-4.1217 13.722-0.41325 11.102 5.5934 5.7046 6.3139-2.4278 5.2715-8.4185 1.4307-13.484-0.92782-15.906-0.19653-16.328 2.2332-13.349 6.4214-13.221 6.2863-3.4898 6.442 0.91562 4.7463 3.9797 1.5971 6.981-1.5728 7.2453-5.1434 7.9408-6.8041 6.4307-6.7239 5.2313-9.6462 3.0589 8.2353 1.3011 9.5461 1.3537 8.1665-0.12411 6.7717-2.4237 11.272-6.0869 3.9624-6.8667 0.56176-11.767 1.1608-9.6894 7.688-10.452 11.017-17.555 4.2385-13.475-2.2066-6.4381-4.872-3.2946-3.6289 1.9639-3.1832 3.4765-5.8526 10.59-3.3697 10.535-2.3362 16.928-0.28298 13.844 1.1607 14.362 5.095 13.58 4.175 1.4814 11.478-2.0504 9.7251-5.5952 5.6206-6.1747 5.4506-13.052 2.5339-12.18 1.0853-4.1276-7.0369 27.556-1.8957 13.491 3.1167 2.3178 3.671-0.0282 4.974-0.27224 10.23-3.7592 4.5032-6.4297 3.1254-10.462 4.0765-8.6286 4.4161-6.2192 5.0184-4.8727 6.9556-2.8972c-12.815 5.8553-16.057 13.983-21.907 26.271l0.5263 13.635 3.845 3.3064 3.4448 1.4263 5.6226-0.99027 7.6101-8.5074 5.2864-11.371 1.8416-15.736-1.6724-4.776-0.21647 11.655-0.99698 26.126-1.3985 17.929-2.111 19.201-4.5818 12.655-6.7714 5.0077-6.4327-0.856-3.8474-3.9791-0.44837-7.1912 4.5019-10.184 6.9844-9.5234 6.8414-6.2387 7.147-4.1444 8.3524-4.9079 9.7816-7.9695 8.4906-9.0766 3.6171-10.892s1.8576-19.641 3.2389-20.554c1.3813-0.91278 2.3758-0.73093 2.3758-0.73093l-1.7547 14.203s0.22108-2.9411-2.8562 13.167c-3.0772 16.108-1.2804 19.04-1.2804 19.04s-12.424 34.222 1.2127-1.6439c13.636-35.866 14.842-38.83 18.286-41.215 3.4438-2.3852 3.5452-2.4418 3.5452-2.4418l1.1084 5.7434s-0.35103-7.3006-0.94847 3.7147c-0.59745 11.015-0.0939 11.24-0.48292 10.929-0.38902-0.31161 2.3269 4.9249 2.6112 5.4544s6.5708 3.4295 7.8502 2.6516c1.2794-0.77793 8.2745-3.85 8.2745-3.85l5.3455-6.9269 5.4278-9.5992 6.0468-5.1472 9.4488-2.8658c-11.941 1.8619-15.279 8.6942-22.099 18.141l-3.3087 10.269 0.78977 8.7322s2.8767 5.4793 4.2834 5.9112 6.5604-0.0691 7.9146-0.57945c1.3541-0.51031 5.3016-1.3818 6.579-3.0247s5.399-5.4477 5.399-5.4477l7.1734-29.789-5.8581 29.626s1.541 8.8351 8.8471 9.2266 12.685-6.1561 12.685-6.1561l5.5239-8.0957 2.1815-8.1664 3.719-23.199-0.71326 16.51-5.0417 26.552s-1.9685 5.2866 1.9951 1.6324c3.9636-3.6542 10.551-19.503 10.551-19.503l8.1076-14.583 4.4627-6.3261s5.2767-3.6629 4.475-0.76622-2.151 8.4988-2.151 8.4988l-2.953 18.153-2.3072 14.092s0.0698 6.4401 3.4599 3.0703c3.3901-3.3698 6.727-17.142 6.727-17.142l3.7574-9.4079 6.8047-12.201 3.5606-5.681s4.2015-3.6723 3.289 1.2162c-0.91246 4.8886-3.6861 27.145-3.6861 27.145l0.35877 13.409s0.33983 5.6292 4.7296 2.8923c4.3898-2.7369 23.291-16.317 23.291-16.317l2.0629-38.649-47.168-26.848-68.707-5.8157-121.55-11.269-71.317-2.128-18.557 36.955 16.288 11.879 52.535 2.8657 17.631-21.939-6.2523 3.0385 0.64688 6.3408 4.6085 2.665 6.1445-4.4064s2.6286-1.9564 0.1694-4.9287c-2.4592-2.9723-4.5796-2.9256-4.5796-2.9256l18.997-12.143 12.188 6.9043" clip-path="url(#clipPath103513)" fill="none" stroke="#16b7f8" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" />
        </svg>
      </div>
      <div className='texts'>
        <p>Search an item, I'll splash the pictures.</p>
      </div>
      
      <div className='getStarted'>
        <Link to='/search'>Get Started</Link>
      </div>
    </div>
  )
}

export default Facade