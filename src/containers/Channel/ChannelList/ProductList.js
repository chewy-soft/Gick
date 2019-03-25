// import React from "react";
// import HorizontalCard from "../../../components/Card/HorizontalCard";
// import * as bucket from "../../../lib/bucket";
// import styles from "./styles/styles";
// import Price from "../../../components/Offer/Price";
// import View from "../../../components/View/View";

// export default props => {
//   const { channel, router, onPress, origin_locale, locale, t } = props;
//   const currentLocale = origin ? origin_locale : locale;
//   return (
//     <HorizontalCard
//       src={bucket.images(channel._id)['128x85']}
//       onPress={onPress}
//       title={t(channel.name, currentLocale)}
//       subTitle={t(channel.description, currentLocale)}
//       component={
//         <View style={styles.bottom}>
//           <Price
//             ref_price={channel.offer.ref_price}
//             price={channel.offer.price}
//             zscore={channel.offer.zscore}
//             size="s"
//             toZscoreInfo={router.toZscoreInfo}
//           />
//         </View>
//       }
//     />
//   );
// };
