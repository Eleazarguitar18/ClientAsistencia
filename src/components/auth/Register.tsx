import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import axios from "axios";
import { User } from "../dto/user-dto";
import { url_api_local } from "../url_base";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Dayjs } from "dayjs";
import toast from "react-hot-toast";
// type Props = {};

export const Register = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [fecha_nacimiento, setFecha_nacimiento] = useState<Dayjs | null>(null);
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  // const notify = () => toast.success("Registro exitoso");
  // const notify=toast
  const handleRegister = async () => {
    const usuario: User = {
      nombre: nombre,
      apellido: apellido,
      fecha_nacimiento: fecha_nacimiento ? fecha_nacimiento.toDate() : null,
      telefono: telefono,
      email: email,
    };
    console.log(usuario);

    try {
      const response = await toast.promise(
        axios.post(`${url_api_local}/user`, usuario),
        {
          loading: "Cargando",
          success: "Se registro correctamente",
          error: "Error al registrar",
        }
      );
      console.log("Respuesta del sevidor", response);
      if (response.status === 201) {
        setNombre("");
        setApellido("");
        setFecha_nacimiento(null);
        setTelefono("");
        setEmail("");
        // notify();
      }
    } catch (error) {
      console.error("Error inesperado:", error);
    }
  };
  const handleDateChange = (newValue: Dayjs | null) => {
    setFecha_nacimiento(newValue);
    // console.log("Fecha seleccionada:", newValue);
  };
  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-t bg-slate-100 h-screen text-indigo-900 text-center p-2">
      <div className="flex flex-col gap-3">
        <div className="bg-slate-400 text-white p-2 font-bold rounded-md">
          Registro de asistencia
        </div>
        <TextField
          id="Nombre"
          label="Nombre"
          variant="outlined"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <TextField
          id="Apellido"
          label="Apellido"
          variant="outlined"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />
        {/* <TextField
          id="outlined-basic"
          label="Fecha_nacimiento"
          variant="outlined"
          value={fecha_nacimiento}
          onChange={(e) => setFecha_nacimiento(e.target.value)}
        /> */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker
              // id="Fecha de Nacimiento"
              label="Fecha de Nacimiento"
              value={fecha_nacimiento}
              onChange={handleDateChange}
            />
          </DemoContainer>
        </LocalizationProvider>

        <TextField
          id="Telefono"
          label="Telefono"
          variant="outlined"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />

        <TextField
          id="Email"
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          onClick={handleRegister}
        >
          Enviar
        </Button>
      </div>
    </div>
  );
};
