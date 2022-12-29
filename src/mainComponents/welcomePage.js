import React from "react";
import { useFunctionsJson } from "../hooks/useFunctionsJson";
import { Header } from "../components/header";
import { Carousel } from "../components/carousel";
import { CarouselTraditional } from "../components/carouselTraditional";
import { Categories } from "../components/categories";
import { Footer } from "../components/footer";
import Search from "../components/search";

export function WelcomePage() {
  const {
    trending,
    moviePopular,
    movieRated,
    nowPlaying,
  } = useFunctionsJson();

  return (
    <>
      <Header />
      <Search />
      <Carousel array={trending} title='Trendings'/>
      <Carousel array={moviePopular} title='Popular'popular />
      <CarouselTraditional array={nowPlaying}/>
      <Carousel array={movieRated} title='Top Rated' />
      <Categories />
      <Footer /> 
    </>
  );
}