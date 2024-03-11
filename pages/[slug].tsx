import React from "react";
import { allProductsApi } from "@/api/functions/products.api";
import CustomCard from "@/components/CustomCard/CustomCard";
import Wrapper from "@/layout/wrapper/Wrapper";
import { Box, Button, Container, Grid, styled } from "@mui/material";
import { useRouter } from "next/router";
import { HomeProps } from "pages";

const SlyedContainer = styled(Container)`
  margin-top: 25px;
`;
const FilterContainer = styled(Box)`
  margin: 10px;
`;
const StyledButton = styled(Button)`
  margin: 5px;
  background: #75ced7;
`;

const Index = ({ productsData }: HomeProps) => {
  const router = useRouter();
  const { slug } = router.query;
  // console.log("slug", slug);
  const data = productsData?.filter((dta) => {
    if (dta?.slug === slug) return dta;
  });
  // console.log("filterDta", data);

  return (
    <Wrapper>
      <SlyedContainer>
        <FilterContainer>
          {productsData?.map((item) => {
            return (
              <>
                {item?.slug === slug ? (
                  <StyledButton variant="contained" disabled>
                    {item?.title}
                  </StyledButton>
                ) : (
                  <StyledButton variant="contained" onClick={()=>router.push(`/${item?.slug}`)}>{item?.title}</StyledButton>
                )}
              </>
            );
          })}
        </FilterContainer>
        {data?.map((item) => {
          return (
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              {item?.products?.map((element) => {
                return (
                  <Grid item xs={3}>
                    <CustomCard
                      title={element?.brand_name}
                      subtitle={
                        `${element?.product_name?.slice(0, 18)}` + "..."
                      }
                      cardImage={element?.product_meta_data[3]?.value?.image}
                      price={element?.product_regular_price}
                      offerPrice={element?.product_sale_price}
                      subtitleLink={element?.product_link}
                    />
                  </Grid>
                );
              })}
            </Grid>
          );
        })}
      </SlyedContainer>
    </Wrapper>
  );
};

export const getServerSideProps = async () => {
  const productsData = await allProductsApi();
  return { props: { productsData } };
};

export default Index;
