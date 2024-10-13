import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import axios from "axios";
type Props = {};

export const Login = (props: Props) => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [fecha_nacimiento, setFecha_nacimiento] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");

  const handleData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNombre(event.target.value);
    setApellido(event.target.value);
    setFecha_nacimiento(event.target.value);
    setTelefono(event.target.value);
    setEmail(event.target.value);
    // const response: any = axios.post;
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
          onChange={handleData}
        />
        <TextField
          id="outlined-basic"
          label="Apellido"
          variant="outlined"
          value={apellido}
          onChange={handleData}
        />
        <TextField
          id="outlined-basic"
          label="Fecha_nacimiento"
          variant="outlined"
          value={fecha_nacimiento}
          onChange={handleData}
        />
        <TextField
          id="outlined-basic"
          label="Telefono"
          variant="outlined"
          value={telefono}
          onChange={handleData}
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          value={email}
          onChange={handleData}
        />
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </div>
    </div>
  );
};
