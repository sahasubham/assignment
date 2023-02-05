import { Platform, StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

export default StyleSheet.create({
  //Global
  container: {
    flex: 1,
    justifyContent: "center",
    alignItemscenter: "center",
  },
  btn: {
    backgroundColor: "#4f4064",
    width: "100%",
    borderRadius: 5,
    height: 50,
    justifyContent: "center",
    alignItemscenter: "center",
    padding: 10,
    elevation: 2,
    marginVertical: 8,
  },
  btn_text: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 17,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  acc_text: {
    fontSize: 16,
    paddingRight: 5,
    color: "#6E7695",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    top: "9%",
    padding: 15,
    width: "100%",
    backgroundColor: "#4f4064",
  },
  ham_holder: {
    width: 35,
    height: 20,
  },
  logout: {
    flexDirection: "row",
  },
  header_logout: {
    backgroundColor: "#fff",
    borderRadius: 50,
    width: 27,
    height: 27,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.7,
    shadowRadius: 3.84,
    elevation: 5,
  },
  img: {
    width: 15,
    height: 15,
  },
  //SignUp
  register: {
    position: "relative",
    bottom: 0,
    backgroundColor: "#fff",
    width: width,
    height: height,
  },
  register_content: {
    padding: 20,
  },
  register_input_field: {
    backgroundColor: "rgba(243,230,217,.25)",
    width: "100%",
    marginVertical: 8,
    padding: 10,
    borderRadius: 5,
    color: "#000",
  },
  register_text_view: {
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  sign_text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#315b7e",
  },
  //Product Listing
  floatingBtn: {
    position: "absolute",
    width: 50,
    height: 50,
    //alignItems: "center",
    //justifyContent: "center",
    right: 30,
    //left: 10,
    bottom: "8%",
  },
  floatingBtnStyle: {
    resizeMode: "contain",
    width: 50,
    height: 50,
  },
  designlisting_item: {
    marginBottom: 10,
  },
  different_size: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    borderRadius: 5,
    borderColor: "#F2F2F2",
    borderWidth: 1,
    position: "relative",
    overflow: "hidden",
  },
  different_size_left: {
    width: "40%",
    height: 100,
    backgroundColor: "#F9F9FF",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  different_size_right: {
    width: "60%",
    backgroundColor: "#F9F9FF",
    padding: 10,
    paddingBottom: 15,
    height: 100,
  },
  different_design_img: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  different_design_title: {
    fontSize: 14,
    fontWeight: "bold",
    paddingBottom: 5,
  },
  different_design_btns: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  product_list_button: {
    justifyContent: "flex-end",
  },
  price_subtitle: {
    fontSize: 12,
    lineHeight: 20,
    color: "#1B242D",
  },
  editProduct: {
    height: 25,
    width: 25,
  },
  product_list_button: {
    justifyContent: "flex-end",
  },
  strike_price: {
    textDecorationLine: "line-through",
    color: "red",
  },
  //Add Product
  upload: {
    height: "100%",
    position: "relative",
    backgroundColor: "#fff",
  },
  uploadHeader: {
    // flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingVertical: 10,
    backgroundColor: "#fff",
    // borderWidth: 1
  },
  uploadHeader_content: {
    // width: '70%',
    alignItems: "center",
  },
  uploadImgWrap: {
    // width: 100,
    // height: 100,
    borderRadius: 50,
    backgroundColor: "#fff",
    // borderWidth: 1,
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.84,
    shadowRadius: 6.27,

    elevation: 7,
  },
  upload_title: {
    flexDirection: "row",
    // alignItems: 'center',
  },
  uploadImg: {
    width: 100,
    height: 100,
    borderRadius: 55,
  },
  login_title: {
    color: "#f29400",
    fontSize: 25,
    fontWeight: "bold",
    textShadowColor: "#ccc",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  appliedBox: {
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 20,
    // backgroundColor: "#fff",
    // shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 7,
  },
  inputBox: {
    marginBottom: 10,
  },
  orngShadow: {
    shadowColor: "#f17800",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 7,

    backgroundColor: "#fff",
    padding: 10,
    paddingTop: 5,
    borderRadius: 8,
  },
  inputLabel: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#332100",
    marginBottom: 5,
  },
  text_shadow: {
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
  },
  inputField: {
    backgroundColor: "rgba(243,230,217,.25)",
    borderRadius: 5,
    height: 40,
    padding: 5,
  },
  uploadBtn_box: {
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 10,
    // borderWidth: 1
  },
  uploadBtn: {
    backgroundColor: "#4f4064",
    height: 40,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    // position: 'absolute',
    // bottom: 0,
    width: "40%",
    // elevation: 3
    shadowColor: "#f17800",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 7,
  },
  uploadBtn_text: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  upload_product_img: {
    backgroundColor: "#fff",
    margin: "5%",
    borderWidth: 1,
    borderColor: "#F9E5CE",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
  upload_img: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  product_subtitle: {
    color: "#6E7695",
    fontSize: 12,
    lineHeight: 15,
    marginTop: 5,
  },
  //modal
  popup_view: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0, 0.3)",
  },
  modal_view: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: 999,
  },
  success_modal_content: {
    backgroundColor: "#fff",
    width: "80%",
    height: "30%",
    borderRadius: 15,
    padding: 25,
  },
  modal_btn_view_alt: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  modal_heading: {
    color: "#15294B",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    paddingBottom: 10,
  },
  modal_desc: {
    fontSize: 14,
    color: "#8A8D9F",
    textAlign: "center",
    paddingBottom: "5%",
  },
});
