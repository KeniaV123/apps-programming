import * as React from "react";
import * as RN from "react-native";
import { useNavigation } from "@react-navigation/native";
import { database } from "../../config/fb";
import { collection, addDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  const navigation = useNavigation();

  const [usuarios, setUsuarios] = React.useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    createdAt: new Date(),
  });

  const handleRegister = async () => {
    if (usuarios.password !== usuarios.confirmPassword) {
      return alert("Las contraseñas no coinciden");
    }
    const auth = getAuth();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        usuarios.email,
        usuarios.password
      );
      const user = userCredential.user;
      console.log("user", user);
      navigation.navigate("LoginScreen");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("error", errorCode, errorMessage);
    }
    await addDoc(collection(database, "usuarios"), usuarios);
  };

  return (
    <RN.View style={styles.container}>
      <RN.Text style={styles.title}>Registrar</RN.Text>

      <RN.TextInput
        onChangeText={(text) => setUsuarios({ ...usuarios, username: text })}
        style={styles.inputContainer}
        placeholder="Nombre"
      />
      <RN.TextInput
        onChangeText={(text) => setUsuarios({ ...usuarios, email: text })}
        style={styles.inputContainer}
        placeholder="Correo electrónico"
      />
      <RN.TextInput
        onChangeText={(text) => setUsuarios({ ...usuarios, password: text })}
        style={styles.inputContainer}
        placeholder="Contraseña"
      />
      <RN.TextInput
        onChangeText={(text) =>
          setUsuarios({ ...usuarios, confirmPassword: text })
        }
        style={styles.inputContainer}
        placeholder="Confirmar contraseña"
      />
      <RN.Button title="Registrar" onPress={handleRegister} />
    </RN.View>
  );
};

export default Register;

const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
  },
  inputContainer: {
    width: 300,
    height: 50,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
});
