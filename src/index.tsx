const not = "not";
const message = `This is ${not} a literal`;

const CareersLink = ({locale} : {locale: string}) =>
<a href={`/${locale}/careers`}> Careers</a>;