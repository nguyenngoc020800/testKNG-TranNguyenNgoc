import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import * as yup from "yup";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";
import style from "styled-components";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Content = style.div`
  padding: 10px;
  position: relative;
  .reset {
    position: absolute;
    bottom: 4px;
    right: 42px;
  }
`;
const FormSymbol = style.div`
position:absolute;
top:33px;
right:19px;
z-index:1;
`;
const Input = styled(MuiInput)`
  width: 100%;
`;
const schemaValidation = yup.object({
  firstName: yup
    .string()
    .required("không được để trống")
    .max(20, " không được quá 20 kí tự"),
  lastName: yup
    .string()
    .required("không được để trống")
    .max(20, " không được quá 20 kí tự"),
  company: yup
    .string()
    .required("không được để trống")
    .max(20, " không được quá 20 kí tự"),
  email: yup.string().required("không được để trống"),
  phoneNumber: yup
    .string()
    .required("không được để trống")
    .min(10, " phải từ 10 đến 11 kí tự")
    .max(11, " phải từ 10 đến 11 kí tự"),
  cardNumber: yup
    .string()
    .required("không được để trống")
    .min(11, " phải từ 11 đến 20 kí tự")
    .max(20, " phải từ 11 đến 20 kí tự"),
  expiration: yup.string().required("không được để trống"),
  cvn: yup.string().required("không được để trống"),
  donate: yup.number(),
  gender: yup.string().required("không đc để trống"),
  payMode: yup.string().required("vui lòng chọn hình thức thanh toán "),
});

const FormContent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userList } = useSelector((state) => state.form);
  console.log(userList);
  const {
    clearErrors,
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      phoneNumber: "",
      gender: "",
      payMode: "",
      cardNumber: "",
      expiration: "",
      cvn: "",
      donate: 100,
    },
    resolver: yupResolver(schemaValidation),
    mode: "onTouched",
  });
  const onSubmit = (value) => {
    console.log(value);
    dispatch({ type: "form/submitForm", payload: value });
    reset();
    clearErrors();
  };
  const onError = (value) => {
    console.log(value);
  };

  //code dành cho range-slider
  const [value2, setValue2] = useState(100);

  const handleSliderChange = (event, newValue) => {
    setValue2(
      Number(event.target.value) === 0 ? 0 : Number(event.target.value)
    );
  };

  const handleInputChange = (event) => {
    setValue2(
      Number(event.target.value) === 0 ? 0 : Number(event.target.value)
    );
  };

  const handleBlur = () => {
    if (Number(value2) < 0) {
      setValue2(0);
    } else if (Number(value2) > 1000) {
      setValue2(1000);
    }
  };

  //code dành cho range-slider

  return (
    <Content>
      <form action="" onSubmit={handleSubmit(onSubmit, onError)} id="form">
        <div className="row">
          <div className="col-12 col-sm-6 px-4">
            <TextField
              id="outlined-basic"
              label={
                <span>
                  First Name<span className="text-danger">*</span>
                </span>
              }
              variant="outlined"
              sx={{ marginBottom: "30px", width: "100%" }}
              {...register("firstName")}
              helperText={errors.firstName?.message}
              error={!!errors.firstName}
            />
            <TextField
              id="outlined-basic"
              label={
                <span>
                  Last Name<span className="text-danger">*</span>
                </span>
              }
              variant="outlined"
              sx={{ marginBottom: "30px", width: "100%" }}
              {...register("lastName")}
              helperText={errors.lastName?.message}
              error={!!errors.lastName}
            />
            <TextField
              id="outlined-basic"
              label={
                <span>
                  Company<span className="text-danger">*</span>
                </span>
              }
              variant="outlined"
              sx={{ marginBottom: "30px", width: "100%" }}
              {...register("company")}
              helperText={errors.company?.message}
              error={!!errors.company}
            />
            <TextField
              type="email"
              id="outlined-basic"
              label={
                <span>
                  Email<span className="text-danger">*</span>
                </span>
              }
              variant="outlined"
              sx={{ marginBottom: "30px", width: "100%" }}
              {...register("email")}
              helperText={errors.email?.message}
              error={!!errors.email}
            />
            <TextField
              type="number"
              id="outlined-basic"
              label={
                <span>
                  Phone Number<span className="text-danger">*</span>
                </span>
              }
              variant="outlined"
              sx={{ marginBottom: "10px", width: "100%" }}
              {...register("phoneNumber")}
              helperText={errors.phoneNumber?.message}
              error={!!errors.phoneNumber}
            />
          </div>
          <div className="col-12 col-sm-6 px-4">
            <div className="form-item">
              <Controller
                name="gender"
                control={control}
                render={({ field, fieldState }) => {
                  return (
                    <FormControl sx={{ width: "100%", marginBottom: "30px" }}>
                      <InputLabel id="gender">
                        <span>
                          Gender<span className="text-danger">*</span>
                        </span>
                      </InputLabel>
                      <Select
                        {...field}
                        labelId="gender"
                        id="gender-select"
                        label={
                          <span>
                            Gender<span className="text-danger">*</span>
                          </span>
                        }
                        sx={{
                          width: "100%",
                        }}
                        defaultValue=""
                        error={!!fieldState.error}
                      >
                        <MenuItem
                          value="men"
                          sx={{
                            width: "100%",
                            justifyContent: "center",
                            display: "flex",
                          }}
                        >
                          Men
                        </MenuItem>
                        <MenuItem
                          value="women"
                          sx={{
                            width: "100%",
                            justifyContent: "center",
                            display: "flex",
                          }}
                        >
                          Women
                        </MenuItem>
                        <MenuItem
                          value="other"
                          sx={{
                            width: "100%",
                            justifyContent: "center",
                            display: "flex",
                          }}
                        >
                          Other
                        </MenuItem>
                      </Select>
                      {fieldState.error?.message && (
                        <p
                          className="text-danger text-start mb-0"
                          style={{
                            fontSize: "12px",
                            paddingLeft: "5px",
                            marginBottom: "0",
                          }}
                        >
                          {fieldState.error.message}
                        </p>
                      )}
                    </FormControl>
                  );
                }}
              />
            </div>
            <div className="form-item">
              <Controller
                name="payMode"
                control={control}
                render={({ field, fieldState }) => {
                  return (
                    <FormControl sx={{ width: "100%", marginBottom: "21px" }}>
                      <FormLabel
                        id="payment-mode-label"
                        sx={{ textAlign: "left" }}
                      >
                        <span>
                          Payment Mode<span className="text-danger">*</span>
                        </span>
                      </FormLabel>
                      {fieldState.error?.message && (
                        <span
                          className="text-danger text-start mb-0"
                          style={{ fontSize: "12px", paddingLeft: "5px" }}
                        >
                          {fieldState?.error?.message}
                        </span>
                      )}
                      <RadioGroup
                        {...field}
                        row
                        aria-labelledby="payment-mode-label"
                        name="payMode"
                        sx={{ display: "flex", justifyContent: "space-evenly" }}
                        error={fieldState.error}
                      >
                        <FormControlLabel
                          value="visa"
                          control={<Radio />}
                          label="Visa"
                        />
                        <FormControlLabel
                          value="master card"
                          control={<Radio />}
                          label="Master Card"
                        />
                        <FormControlLabel
                          value="amex"
                          control={<Radio />}
                          label="Amex"
                        />
                      </RadioGroup>
                    </FormControl>
                  );
                }}
              />
            </div>
            <TextField
              type="number"
              id="outlined-basic"
              label={
                <span>
                  Card Number<span className="text-danger">*</span>
                </span>
              }
              variant="outlined"
              sx={{ marginBottom: "30px", width: "100%" }}
              {...register("cardNumber")}
              helperText={errors.cardNumber?.message}
              error={!!errors.cardNumber}
            />
            <div className="date">
              <TextField
                type="date"
                id="outlined-basic"
                label={
                  <span>
                    Expirarion<span className="text-danger">*</span>
                  </span>
                }
                variant="outlined"
                sx={{ width: "100%", marginBottom: "30px" }}
                {...register("expiration")}
                helperText={errors.expiration?.message}
                error={!!errors.expiration}
              />
            </div>
            <TextField
              id="outlined-basic"
              label={
                <span>
                  CVN<span className="text-danger">*</span>
                </span>
              }
              variant="outlined"
              sx={{ width: "100%" }}
              {...register("cvn")}
              helperText={errors.cvn?.message}
              error={!!errors.cvn}
            />
          </div>
        </div>
        <div className="range-slider mb-5">
          <Controller
            name="donate"
            control={control}
            render={({ field, fieldState }) => {
              return (
                <Box
                  sx={{ width: "90%", margin: "0 auto", position: "relative" }}
                  {...field}
                >
                  <Typography
                    id="input-slider"
                    gutterBottom
                    sx={{ textAlign: "left" }}
                  >
                    <span>
                      Donate Us<span className="text-danger">*</span>
                    </span>
                  </Typography>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs>
                      <Slider
                        {...field}
                        value={typeof value2 === "number" ? value2 : 0}
                        onChange={handleSliderChange}
                        aria-labelledby="input-slider"
                        color="success"
                        min={0}
                        max={1000}
                      />
                    </Grid>
                    <Grid item>
                      <Input
                        value={Number(value2)}
                        size="small"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        type="number"
                        inputProps={{
                          step: 100,
                          min: 0,
                          max: 1000,
                          "aria-labelledby": "input-slider",
                        }}
                      />
                      <FormSymbol>$</FormSymbol>
                    </Grid>
                  </Grid>
                </Box>
              );
            }}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary py-2 px-5 "
          style={{ position: "absolute", right: "200px", bottom: "4px" }}
        >
          submit
        </button>
        <button
          type="reset"
          className="btn btn-outline-warning py-2 px-5 reset"
          onClick={() => {
            clearErrors();
          }}
        >
          reset
        </button>
      </form>
      <button
        className="btn btn-outline-secondary py-2 px-5 "
        style={{ position: "absolute", right: "380px", bottom: "4px" }}
        onClick={() => {
          navigate("/userlist");
        }}
      >
        go to user list
      </button>
    </Content>
  );
};

export default FormContent;
