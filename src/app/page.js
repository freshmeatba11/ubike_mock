"use client";
import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import styled from "styled-components";

import Metrics from "@/theme/metrics";

import { CheckboxArea } from "@/components/checkbox/checkboxArea";
import { ImageWall } from "@/components/imageWall";
import { SelectArea } from "@/components/selectInput/selectArea";

import fakeData from "@/constants/fake.json";

const Main = styled.main`
  background-color: #ffffff;
  width: 100svw;
  height: calc(100svh - 73px);

  @media ${Metrics.media.desk} {
    max-width: 1192px;
    height: calc(100svh - 104px);
    margin: 0 auto;
  }

  padding-inline: 32px;
  padding-top: 34px;
`;
const TitleText = styled.h2`
  font-size: 18px;
  color: var(--page-title-color);
  letter-spacing: 2.5px;
  margin-bottom: 16px;

  @media ${Metrics.media.desk} {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 32px;
  }
`;

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const { control, errors, setValue, resetField } = useForm({
    defaultValues: {
      form_city: { value: "TPE", label: "台北市" },
      form_station: null,
      form_dist: { all: true },
    },
  });
  const selectCity = useWatch({ control, name: "form_city" });
  const selectDist = useWatch({ control, name: "form_dist" });
  const selectStation = useWatch({ control, name: "form_station" });

  const makeAllDistChecked = (state) => {
    districtList.forEach((dist) => {
      setValue(`form_dist.${dist}`, state);
    });
  };

  useEffect(() => {
    //城市變動時 清空站點
    resetField("form_station");
    //城市變動時 清空行政區
    Object.keys(selectDist)?.forEach((dist) => {
      setValue(`form_dist.${dist}`, false);
    });
    //城市變動時 預設全選行政區
    resetField("form_dist.all");
    makeAllDistChecked(true);
  }, [selectCity]);

  //! fakeData api
  const districtList = selectCity
    ? selectCity.value === "TPE"
      ? Array.from(new Set(fakeData.map((item) => item.sarea)))
      : ["XX區"]
    : [];

  const stationList = selectCity
    ? selectCity.value === "TPE"
      ? fakeData
          .filter((item) => selectDist[item.sarea] === true)
          .reduce(
            (acc, cur) => {
              const stationName = cur.sna.replace("YouBike2.0_", "");
              return {
                list: [...acc.list, { label: stationName, value: stationName }],
                table: [
                  ...acc.table,
                  {
                    city: selectCity.label,
                    dist: cur.sarea,
                    stationName,
                    parklingLot: cur.bemp,
                    available: cur.sbi,
                  },
                ],
              };
            },
            { list: [], table: [] }
          )
      : {
          list: [{ label: "XX站點", value: "XX站點" }],
          table: [
            {
              city: selectCity.label,
              dist: "XX區",
              stationName: "XX站點",
              parklingLot: 0,
              available: 0,
            },
          ],
        }
    : {
        list: [],
        table: [],
      };

  //! fakeData api

  const handleChangeSelectAllCheckbox = ({ trigger, name }) => {
    //* 按下checkbox時，調整 ”全部勾選“ 的狀態
    if (!trigger) setValue("form_dist.all", false);
    if (trigger) {
      const isOthersChecked = districtList.find((dist) => {
        return dist === name.split(".")[1] ? false : selectDist[dist] === false;
      })
        ? false
        : true;
      isOthersChecked && setValue("form_dist.all", true);
    }
  };

  const handleSelectAllCheckboxOnClick = ({ trigger }) => {
    makeAllDistChecked(trigger);
  };

  return (
    <Main>
      <TitleText>站點資訊</TitleText>

      <SelectArea {...{ control, options: stationList.list }} />

      <ImageWall>
        <CheckboxArea
          {...{
            control,
            options: districtList,
            handleChangeSelectAll: handleChangeSelectAllCheckbox,
            handleSelectAllOnClick: handleSelectAllCheckboxOnClick,
            disabled: isLoading,
          }}
        />
      </ImageWall>
      {/* //todo: table */}
      {stationList.table.length}
    </Main>
  );
}
