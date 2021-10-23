import React, { Component } from 'react'
import axios from 'axios';
import * as moment from 'moment';

export const DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        products: [],
        aboutContent: [],
        blog: [],
        WishListState: [],
        isLogin: false,
        isAdministrator: false,
        USERNAME: '',
        USERMAIL: '',
        USERPICTURE: '',
        EDITADDRESSSTATE: '',
        LogOut: true,
        LOGOUTTOKEN: '',
        XCSRFTOKEN: '',
        SESSIONTOKEN: '',
        USERUID: '',
        LOADING: false,
        ADDRESSLOADING: false,
        ABOUTLOADING: false,
        AUTHORIZATION: 'Basic cmVzdGFydmluZDpyZXN0YXJ2aW5k',
        GETUSERADDRESS: [],
        SELECTEDADDRESSUSEFORORDER: [],
        ORDERHISTORY: [],
        TESTIMONIALS: [],
        SUCCESS: '',
        ERROR: '',
        ALERT: '',
        ADDTOCARTALERT: '',
        OrderPlaceButtonDisbale: false,
        OrderId:'',
        currentTime : '',
        EstimatedDelivery: '',
        cart: [],
        total: 0,
        originaltotal: 0
    }

    render() {
        const {
            products,
            WishListState,
            aboutContent,
            OrderPlaceButtonDisbale,
            cart,
            total,
            blog,
            isLogin,
            originaltotal,
            XCSRFTOKEN,
            SESSIONTOKEN,
            USERUID,
            LOADING,
            AUTHORIZATION, 
            GETUSERADDRESS, 
            SELECTEDADDRESSUSEFORORDER, 
            ORDERHISTORY, 
            TESTIMONIALS, 
            SUCCESS, 
            ERROR, 
            isAdministrator,  
            EDITADDRESSSTATE,
            ALERT,
            USERNAME,
            USERMAIL,
            USERPICTURE,
            ADDRESSLOADING,
            ABOUTLOADING,
            ADDTOCARTALERT
        }
        = this.state;
        const {
                addCart, 
                addWishList, 
                userDelete, 
                CloseEditAddressPopup, 
                addNewAddress, 
                deleteAddress, 
                selectedSize, 
                selectedAddressUseForOrder, 
                reduction, 
                increase, 
                userLogIn, 
                userRegister, 
                LogOut, 
                removeProduct, 
                getTotal, 
                orignalprice, 
                passwordChange, 
                editAddress, 
                removeWishList, 
                innerPagescrollTop,
                OrderPlace,
                moveToCart
            }
        = this;
        
        return (
            <DataContext.Provider 
            value={
                {
                    products,
                    OrderPlaceButtonDisbale,
                    moveToCart,
                    addNewAddress, 
                    WishListState, 
                    addWishList, 
                    CloseEditAddressPopup, 
                    removeWishList, 
                    userDelete, 
                    blog, 
                    selectedSize, 
                    deleteAddress, 
                    selectedAddressUseForOrder,  
                    aboutContent, 
                    addCart, 
                    cart, 
                    XCSRFTOKEN, 
                    SESSIONTOKEN, 
                    USERUID, 
                    LOADING, 
                    AUTHORIZATION, 
                    GETUSERADDRESS, 
                    SELECTEDADDRESSUSEFORORDER, 
                    ORDERHISTORY, 
                    TESTIMONIALS,
                    SUCCESS, 
                    ERROR, 
                    isAdministrator, 
                    isLogin, 
                    userLogIn, 
                    userRegister, 
                    LogOut, 
                    reduction, 
                    increase,
                    removeProduct, 
                    total, 
                    getTotal, 
                    originaltotal, 
                    orignalprice, 
                    passwordChange, 
                    editAddress, 
                    EDITADDRESSSTATE, 
                    innerPagescrollTop,
                    ALERT,
                    OrderPlace,
                    USERNAME,
                    USERMAIL,
                    USERPICTURE,
                    ADDRESSLOADING,
                    ABOUTLOADING,
                    ADDTOCARTALERT
                }
            }>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}