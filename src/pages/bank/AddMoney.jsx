import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as BankService from "../../services/bankService";
import { setBank } from "../../store/reducer.bank";
import AddMoneyForm from "./addMoneyForm";

const AddMoney = () => {
  const dispatch = useDispatch();
  let { id } = useParams();
  const bank = useSelector((state) => state.bank.bank);
  const [loading, setLoading] = useState(false);

  const loadData = async () => {
    setLoading(true);
    const response = await BankService.getEach(id);
    dispatch(setBank(response.data));
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  if (!loading) return <AddMoneyForm editData={bank} />;

  return <></>;
};

export default AddMoney;