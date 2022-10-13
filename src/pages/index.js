import { useState } from "react";
import Head from "next/head";
import CurrencyCard from "../conponents/CurrencyCard";
import { currency } from "../helpers";
import Input from "./Input";
import { Grid } from "@mui/material";

export default function Home() {
  const [value, setValue] = useState(0);
  const [showData, setShowData] = useState(false);
  const [hasMoreOptions, setHasMoreoptions] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="py-5">
        <form className="row g-2 g-md-3 g-xl-4" onSubmit={submitHandler}>
          <div className="col-12 col-xl-8">
            <Input value={value} onChange={(e) => setValue(e)} />
          </div>
          <div className="col-12 col-sm-6 col-xl-2 align-self-end">
            <button className="btn w-100 btn-primary">submit</button>
          </div>
          <div className="col-12 col-sm-6 col-xl-2 align-self-end">
            <button
              className="btn w-100 btn-secondary"
              onClick={() => setShowData((p) => !p)}
            >
              Options
            </button>
          </div>

          <div className="col-12">
            {showData && (
              <>
                <p>{value}</p>
              </>
            )}
          </div>
        </form>
      </header>

      <main>
        <div className="row g-2 g-md-3 g-xl-4">
          <div className="col-12 col-md-6 col-lg-3">
            <CurrencyCard {...{ img: currency[0].img, count: 12300 }} />
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <CurrencyCard {...{ img: currency[1].img, count: 12300 }} />
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <CurrencyCard {...{ img: currency[2].img, count: 12300 }} />
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <CurrencyCard {...{ img: currency[3].img, count: 12300 }} />
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <CurrencyCard {...{ img: currency[4].img, count: 12300 }} />
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <CurrencyCard {...{ img: currency[5].img, count: 12300 }} />
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <CurrencyCard {...{ img: currency[6].img, count: 12300 }} />
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <CurrencyCard {...{ img: currency[7].img, count: 12300 }} />
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <CurrencyCard {...{ img: currency[8].img, count: 12300 }} />
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <CurrencyCard {...{ img: currency[9].img, count: 12300 }} />
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <CurrencyCard {...{ img: currency[10].img, count: 12300 }} />
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <CurrencyCard {...{ img: currency[11].img, count: 12300 }} />
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <CurrencyCard {...{ img: currency[12].img, count: 12300 }} />
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <CurrencyCard {...{ img: currency[13].img, count: 12300 }} />
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <CurrencyCard {...{ img: currency[14].img, count: 12300 }} />
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <CurrencyCard {...{ img: currency[15].img, count: 12300 }} />
          </div>
        </div>

        <Grid container spacing={3}>
          <Grid columns={{ xs: 12, md: 6, xl: 3 }}>
            <div>xs=8</div>
          </Grid>
          <Grid columns={{ xs: 12, md: 6, xl: 3 }}>
            <div>xs=4</div>
          </Grid>
          <Grid columns={{ xs: 12, md: 6, xl: 3 }}>
            <div>xs=4</div>
          </Grid>
          <Grid columns={{ xs: 12, md: 6, xl: 3 }}>
            <div>xs=8</div>
          </Grid>
        </Grid>
      </main>
    </div>
  );
}