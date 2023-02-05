import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground,
  Modal,
} from "react-native";
import Style from "../style/Style";
import Header from "../../components/Header";
import { useSelector, useDispatch } from "react-redux";
import { productList, productRemove } from "../../store/productSlice";
import {
  setProName,
  setProductId,
  modalState,
  setMessage,
  setMode,
} from "../../store/productSlice";

const ProductListScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const [addPro, setAddPro] = useState(false);
  useEffect(() => {
    getProducts();
  });

  const getProducts = async () => {
    dispatch(productList());
  };

  const _editProduct = (id) => {
    navigation.navigate("modify", { editId: id });
  };

  const _deleteProduct = (id) => {
    dispatch(productRemove(id));
  };

  return (
    <>
      <View style={Style.register}>
        <Header />
        <View style={[Style.container, { marginTop: "9%" }]}>
          <ScrollView style={{ marginBottom: "30%" }}>
            {product.products.map((item, index) => (
              <View style={Style.designlisting_item} key={index}>
                <View style={Style.different_size}>
                  <View style={Style.different_size_left}>
                    <ImageBackground
                      source={{ uri: item.productImage }}
                      //source={require("../../assets/img/plus.png")}
                      resizeMode="cover"
                      style={Style.different_design_img}
                    ></ImageBackground>
                  </View>
                  <View style={Style.different_size_right}>
                    <Text
                      style={Style.different_design_title}
                      numberOfLines={1}
                    >
                      {item.productname}{" "}
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <Text style={[Style.price_subtitle, { marginRight: 2 }]}>
                        Price:
                      </Text>
                      <Text style={[Style.price_subtitle, Style.strike_price]}>
                        {item.price}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <Text style={[Style.price_subtitle, { marginRight: 2 }]}>
                        Disc Price:
                      </Text>
                      <Text style={Style.price_subtitle}>{item.discount}</Text>
                    </View>
                    <View
                      style={[
                        Style.different_design_btns,
                        Style.product_list_button,
                      ]}
                    >
                      <TouchableOpacity
                        style={[
                          Style.login_btn,
                          Style.different_design_btn,
                          { marginRight: 15 },
                        ]}
                        onPress={() => _editProduct(item.id)}
                      >
                        <Image
                          source={require("../../assets/img/edit.png")}
                          style={Style.editProduct}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[Style.login_btn, Style.different_design_btn]}
                        onPress={() => _deleteProduct(item.id)}
                      >
                        <Image
                          source={require("../../assets/img/trash.png")}
                          style={Style.editProduct}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
          <TouchableOpacity
            activeOpacity={0.7}
            style={Style.floatingBtn}
            onPress={() => navigation.navigate("product")}
          >
            <Image
              source={require("../../assets/img/plus.png")}
              style={Style.floatingBtnStyle}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Modal transparent={true} visible={product.showModal}>
        <TouchableOpacity onPress={() => dispatch(modalState(false))}>
          <View style={Style.popup_view}>
            <View style={Style.modal_view}>
              <View style={[Style.success_modal_content]}>
                <View style={Style.modal_btn_view_alt}>
                  {product.mode == "Success" ? (
                    <Image
                      style={{ marginBottom: 5 }}
                      source={require("../../assets/img/scss.png")}
                    />
                  ) : (
                    <Image
                      style={{ marginBottom: 5 }}
                      source={require("../../assets/img/error.png")}
                    />
                  )}
                </View>
                <Text style={Style.modal_heading}>{product.mode}!</Text>
                <Text style={Style.modal_desc}>{product.message}</Text>
                <View style={[Style.uploadBtn_box, { marginTop: "5%" }]}>
                  {product.mode == "Success" ? (
                    <TouchableOpacity
                      style={Style.uploadBtn}
                      onPress={() => dispatch(modalState(false))}
                    >
                      <Text style={Style.uploadBtn_text}>Ok</Text>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      style={Style.uploadBtn}
                      onPress={() => dispatch(modalState(false))}
                    >
                      <Text style={Style.uploadBtn_text}>Close</Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  );
};

export default ProductListScreen;
