import React, { useState } from "react";
import * as mui from "@mui/material";
import PcaPrediction from "../package/PcaPrediction";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    degree: "",
    total_score: "",
    aptitude: "",
    english: "",
    quantitative: "",
    analytical: "",
    domain: "",
    cf: "",
    coding: "",
    personality: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidForm()) {
      const numericFormValues = convertFormValuesToNumbers(formValues);
      PcaPrediction(numericFormValues);
      // console.log(prediction);
      navigate("/prediction", { state: numericFormValues });
    } else {
      alert("Please fill in all required fields with valid data.");
    }
  };

  const isValidForm = () => {
    return Object.values(formValues).every((value) => value.trim() !== "");
  };

  const convertFormValuesToNumbers = (values) => {
    const numericValues = { ...values };
    for (let key in numericValues) {
      if (key !== "name" && key !== "roll" && key !== "degree") {
        numericValues[key] = parseFloat(numericValues[key]);
      }
    }
    return numericValues;
  };

  return (
    <mui.Box
      sx={{
        textAlign: "center",
        position: "relative",
        left: "50%",
        width: "100%",
        transform: "translateX(-50%)",
      }}
    >
      <mui.Grid
        component="form"
        onSubmit={handleSubmit}
        noValidate
        container
        px={2}
        display={"flex"}
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}
      >
        <mui.Grid item xs={12} sm={6} md={3} lg={3}>
          <mui.TextField
            margin="normal"
            color="primary"
            required
            sx={{ width: "100%" }}
            label="Degree"
            type="text"
            name="degree"
            onChange={handleChange}
            value={formValues.degree}
          />
        </mui.Grid>
        <mui.Grid item xs={12} sm={6} md={3} lg={3}>
          <mui.TextField
            margin="normal"
            color="primary"
            required
            sx={{ width: "100%" }}
            label="Score / 800"
            type="number"
            name="total_score"
            onChange={handleChange}
            value={formValues.total_score}
          />
        </mui.Grid>
        <mui.Grid item xs={12} sm={6} md={3} lg={3}>
          <mui.TextField
            margin="normal"
            color="primary"
            required
            sx={{ width: "100%" }}
            label="Aptitude / 100"
            type="number"
            name="aptitude"
            onChange={handleChange}
            value={formValues.aptitude}
          />
        </mui.Grid>
        <mui.Grid item xs={12} sm={6} md={3} lg={3}>
          <mui.TextField
            margin="normal"
            color="primary"
            required
            sx={{ width: "100%" }}
            label="English / 100"
            type="number"
            name="english"
            onChange={handleChange}
            value={formValues.english}
          />
        </mui.Grid>
        <mui.Grid item xs={12} sm={6} md={3} lg={3}>
          <mui.TextField
            margin="normal"
            color="primary"
            required
            sx={{ width: "100%" }}
            label="Quantitative / 100"
            type="number"
            name="quantitative"
            onChange={handleChange}
            value={formValues.quantitative}
          />
        </mui.Grid>
        <mui.Grid item xs={12} sm={6} md={3} lg={3}>
          <mui.TextField
            margin="normal"
            color="primary"
            required
            sx={{ width: "100%" }}
            label="Analytical / 100"
            type="number"
            name="analytical"
            onChange={handleChange}
            value={formValues.analytical}
          />
        </mui.Grid>
        <mui.Grid item xs={12} sm={6} md={3} lg={3}>
          <mui.TextField
            margin="normal"
            color="primary"
            required
            sx={{ width: "100%" }}
            label="Domain / 100"
            type="number"
            name="domain"
            onChange={handleChange}
            value={formValues.domain}
          />
        </mui.Grid>
        <mui.Grid item xs={12} sm={6} md={3} lg={3}>
          <mui.TextField
            margin="normal"
            color="primary"
            required
            sx={{ width: "100%" }}
            label="Computer Fundamental / 100"
            type="number"
            name="cf"
            onChange={handleChange}
            value={formValues.cf}
          />
        </mui.Grid>
        <mui.Grid item xs={12} sm={6} md={3} lg={3}>
          <mui.TextField
            margin="normal"
            color="primary"
            required
            sx={{ width: "100%" }}
            label="Coding / 100"
            type="number"
            name="coding"
            onChange={handleChange}
            value={formValues.coding}
          />
        </mui.Grid>
        <mui.Grid item xs={12} sm={6} md={3} lg={3}>
          <mui.TextField
            margin="normal"
            color="primary"
            required
            sx={{ width: "100%" }}
            label="Personality"
            type="text"
            name="personality"
            onChange={handleChange}
            value={formValues.personality}
          />
        </mui.Grid>
        <mui.Grid item xs={12} sm={12} md={12} lg={12} mt={3}>
          <mui.Button
            type="submit"
            variant="contained"
            color="primary"
            maxwidth="true"
            sx={{ width: 200, mb: 3 }}
          >
            Submit to Predict
          </mui.Button>
        </mui.Grid>
      </mui.Grid>
    </mui.Box>
  );
}
