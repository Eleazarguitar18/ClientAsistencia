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
// type Props = {};

export const Login = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [fecha_nacimiento, setFecha_nacimiento] = useState<Date | null>(null);
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = async () => {
    const usuario: User = {
      nombre: nombre,
      apellido: apellido,
      fecha_nacimiento: fecha_nacimiento,
      telefono: telefono,
      email: email,
    };
    try {
      const response = await axios.post(`${url_api_local}/user`, usuario);
      console.log("Respuesta del sevidor", response);
    } catch (error) {
      console.error("Error inesperado:", error);
    }
  };
  const handleDateChange = (newValue: Date | null) => {
    setFecha_nacimiento(newValue);
    console.log("Fecha seleccionada:", newValue);
  };
  return (
    <div className="bg-slate-100  justify-around">
      <div className="bg-slate-400 text-white p-2">Registro de asistencia</div>
      <div>
        <TextField
          id="outlined-basic"
          label="Nombre"
          variant="outlined"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <TextField
          id="outlined-basic"
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
              label="Fecha de Nacimiento"
              value={fecha_nacimiento}
              onChange={handleDateChange}
              // renderInput={(params) => <TextField {...params} />}
            />
          </DemoContainer>
        </LocalizationProvider>
        <TextField
          id="outlined-basic"
          label="Telefono"
          variant="outlined"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />

        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          onClick={handleLogin}
        >
          Send
        </Button>
      </div>
    </div>
  );
};
