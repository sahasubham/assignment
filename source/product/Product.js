import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Modal,
  Platform,
} from "react-native";
import Style from "../style/Style";
import Header from "../../components/Header";
import * as ImagePicker from "expo-image-picker";
import { modalState, setMessage, setMode } from "../../store/productSlice";
import { useDispatch, useSelector } from "react-redux";
import * as Permissions from "expo-permissions";
import { storage } from "../../config/firbase";
import { productAdd } from "../../store/productSlice";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const ProductScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const [image, setImage] = useState(false);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productDiscountPrice, setProductDiscountPrice] = useState(0);
  const [imageUrl, setImageUrl] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    //getPermission();
  }, []);

  const getPermission = async () => {
    if (Platform.OS !== "web") {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      const { galery } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
      if (galery != "granted") {
        dispatch(modalState(true));
        dispatch(setMessage("Gallery Permission Required"));
        dispatch(setMode("Error"));
      }
      if (status != "granted") {
        dispatch(modalState(true));
        dispatch(setMessage("Camera Permission Required"));
        dispatch(setMode("Error"));
      }
    }
  };

  const _pickImage = async () => {
    let image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
    });
    if (!image.canceled) {
      setImage(image);
      //console.log(image.uri);
      await uploadPhotoAsync(image.uri);
    } else {
      dispatch(modalState(true));
      dispatch(setMessage("No image selected"));
      dispatch(setMode("Error"));
    }
  };

  const uploadPhotoAsync = async (image) => {
    //console.log(image.assets[0].uri);
    const blobImage = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.log(e);
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", image, true);
      xhr.send(null);
    });

    const metaData = {
      contentType: "image/jpeg",
    };

    const storageRef = ref(storage, "products/" + Date.now());
    const uploadTask = uploadBytesResumable(storageRef, blobImage, metaData);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress("Upload is" + prog + "% Done");
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
          setImageUrl(downloadUrl);
        });
      }
    );
  };
  const addProduct = async () => {
    if (productName == "") {
      dispatch(modalState(true));
      dispatch(setMessage("Product name required"));
      dispatch(setMode("Error"));
    } else {
      if (productName.length < 3) {
        dispatch(modalState(true));
        dispatch(setMessage("Product name too short"));
        dispatch(setMode("Error"));
      } else {
        if (productPrice == "") {
          dispatch(modalState(true));
          dispatch(setMessage("Product price required"));
          dispatch(setMode("Error"));
        } else {
          if (productPrice == 0) {
            dispatch(modalState(true));
            dispatch(setMessage("Product price can not be 0"));
            dispatch(setMode("Error"));
          } else {
            if (imageUrl == "") {
              dispatch(modalState(true));
              dispatch(setMessage("Product image required"));
              dispatch(setMode("Error"));
            } else {
              const data = {
                productname: productName,
                price: productPrice,
                discount: productDiscountPrice,
                productImage: imageUrl,
              };
              dispatch(
                productAdd({
                  productname: productName,
                  price: productPrice,
                  discount: productDiscountPrice,
                  productImage: imageUrl,
                })
              );
            }
          }
        }
      }
    }
  };

  const _move = () => {
    dispatch(modalState(false));
    dispatch(setMessage(""));
    dispatch(setMode(""));
    navigation.navigate("products");
  };
  return (
    <>
      <Header />
      <View
        style={[Style.container, { backgroundColor: "white", marginTop: "9%" }]}
      >
        <View style={[Style.upload]}>
          {/* header */}
          <View style={Style.uploadHeader}>
            <View style={Style.uploadHeader_content}>
              <Text style={Style.login_title}>Add your product detalis</Text>
            </View>
          </View>

          {/* Work Experience*/}
          <View
            style={[
              Style.appliedBox,
              {
                margin: 5,
                shadowColor: "#fff",
              },
            ]}
          >
            {/* Product Name*/}
            <View
              style={[
                Style.inputBox,
                Style.orngShadow,
                {
                  backgroundColor: "#fff",
                  padding: 10,
                  borderRadius: 8,
                },
              ]}
            >
              <Text style={[Style.inputLabel, Style.text_shadow]}>
                Product Name
              </Text>
              <TextInput
                placeholder="Product Name"
                style={Style.inputField}
                onChangeText={(e) => setProductName(e)}
              />
            </View>
            {/* Product Price*/}
            <View
              style={[
                Style.inputBox,
                Style.orngShadow,
                {
                  backgroundColor: "#fff",
                  padding: 10,
                  borderRadius: 8,
                },
              ]}
            >
              <Text style={[Style.inputLabel, Style.text_shadow]}>
                Orginal Price
              </Text>
              <TextInput
                placeholder="Original Price"
                style={Style.inputField}
                onChangeText={(e) => setProductPrice(e)}
              />
            </View>
            {/* Product Discunt Price*/}
            <View
              style={[
                Style.inputBox,
                Style.orngShadow,
                {
                  backgroundColor: "#fff",
                  padding: 10,
                  borderRadius: 8,
                },
              ]}
            >
              <Text style={[Style.inputLabel, Style.text_shadow]}>
                Discount Price
              </Text>
              <TextInput
                placeholder="Discount Price"
                style={Style.inputField}
                onChangeText={(e) => setProductDiscountPrice(e)}
              />
            </View>
            <View style={[Style.appliedBox, Style.orngShadow]}>
              <Text style={[Style.inputLabel, Style.text_shadow]}>
                Product Image
              </Text>
              {progress != 0 ? (
                <Text style={[Style.inputLabel, Style.text_shadow]}>
                  {progress}
                </Text>
              ) : (
                <></>
              )}
              <TouchableOpacity
                style={[Style.upload_product_img, { margin: "2.5%" }]}
                onPress={() => _pickImage()}
              >
                {image == "" ? (
                  <Image
                    style={Style.upload_img}
                    source={require("../../assets/img/medical_records.png")}
                  />
                ) : (
                  <Image style={Style.upload_img} source={{ uri: image.uri }} />
                )}

                <Text style={[Style.product_subtitle, { fontSize: 10 }]}>
                  JPEG & PNG up to 1MB{" "}
                </Text>
              </TouchableOpacity>
              <Text style={{ textAlign: "center" }}></Text>
            </View>
            {/* upload btn */}
            <View style={[Style.uploadBtn_box, { marginTop: "5%" }]}>
              <TouchableOpacity
                style={Style.uploadBtn}
                onPress={() => addProduct()}
              >
                <Text style={Style.uploadBtn_text}>Add Product</Text>
              </TouchableOpacity>
            </View>
          </View>
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
                      onPress={() => _move()}
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

export default ProductScreen;
