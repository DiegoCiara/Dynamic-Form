

import { useState } from "react";
import { toast } from "react-toastify";
import { serviceApi as api } from "./ServiceApi";

export const useRegistrationPage = () => {

  async function createRegistrations(data){
    try { 
      const res = await api.post(`/registration`, data);
      toast.success(`Registrationo alterada com sucesso!`);
      return res;
    } catch (error) {
      toast.error(
        `${error}`
      );
      return;
    }
  }

  async function findRegistrations(){
    try { 
      const res = await api.get(`/registration`);
      return res;
    } catch (error) {
      toast.error(
        `${error}`
      );
      return;
    }
  }

  return {
    createRegistrations,
    findRegistrations
  };
};