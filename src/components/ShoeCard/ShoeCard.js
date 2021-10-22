import styled from "styled-components";
import ShoeBanner from "../ShoeBanner";
import { normalizeToDollars, normalizeCount, isJustReleased } from "./helpers";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const Image = styled.img`
  display: block;
  border-radius: 16px 16px 4px 4px;
  padding-bottom: 8px;
  width: 100%;
`;

const PositionedBanner = styled(ShoeBanner)`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 12px;
  margin-right: -4px;
`;

const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: ${p => p.theme.weights.medium};
  color: ${p => p.theme.colors.gray900};
`;

const Name = styled.span``;
const Price = styled.span`
  font-weight: ${p => p.theme.weights.normal};
`;
const FormerPrice = styled.span`
  font-weight: ${p => p.theme.weights.normal};
  text-decoration: line-through;
  color: ${p => p.theme.colors.gray700};
`;
const Count = styled.div`
  font-weight: ${p => p.theme.weights.normal};
  color: ${p => p.theme.colors.gray700};
`;
const SalePrice = styled.span`
  color: ${p => p.theme.colors.primary};
`;

const getBannerVariant = ({ releaseDate, salePrice }) => {
  if (isJustReleased(releaseDate)) return "hot";
  if (salePrice) return "sale";
  return null;
};

const ShoeCard = ({ shoe, className }) => {
  console.log("shoe", shoe);
  const { name, imageSrc, price, salePrice, releaseDate, numOfColors } = shoe;
  const normalizedPrice = normalizeToDollars(price);
  const normalizedSalePrice = normalizeToDollars(salePrice);
  const bannerVariant = getBannerVariant({ releaseDate, salePrice });
  return (
    <Wrapper className={className}>
      <ImageWrapper>
        <Image src={imageSrc} />
        {bannerVariant ? <PositionedBanner variant={bannerVariant} /> : null}
      </ImageWrapper>
      <DetailRow>
        <Name>{name}</Name>
        {salePrice ? (
          <FormerPrice>{normalizedPrice}</FormerPrice>
        ) : (
          <Price>{normalizedPrice}</Price>
        )}
      </DetailRow>
      <DetailRow>
        <Count>{normalizeCount(numOfColors)}</Count>
        {salePrice ? <SalePrice>{normalizedSalePrice}</SalePrice> : null}
      </DetailRow>
    </Wrapper>
  );
};

export default ShoeCard;
