

import { useState } from "react";
import { toast } from "react-toastify";
import { serviceApi as api } from "./ServiceApi";

export const useModelPage = () => {

  async function updateModel(modelID, data){
    try { 
      const res = await api.post(`/model/${modelID}/aditionals`, data);
      toast.success(`Modelo alterada com sucesso!`);
      return res;
    } catch (error) {
      toast.error(
        `${error}`
      );
      return;
    }
  }

  async function findModel(modelID){
    try { 
      const res = await api.get(`/model/models/${modelID}`);
      return res;
    } catch (error) {
      toast.error(
        `${error}`
      );
      return;
    }
  }
  async function findModelByName(modelName){
    try { 
      const res = await api.get(`/model/name/${modelName}`);
      return res;
    } catch (error) {
      toast.error(
        `${error}`
      );
      return;
    }
  }
  async function findModels(){
    try { 
      const res = await api.get(`/model`);
      return res;
    } catch (error) {
      toast.error(
        `${error}`
      );
      return;
    }
  }

  return {
    updateModel,
    findModel,
    findModelByName,
    findModels
  };
};