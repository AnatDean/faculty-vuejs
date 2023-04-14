export const extractUserInfo = ({email,name: { first, last }, phone, picture: { medium } }) => {
    return { email, firstName: first, lastName: last, phone, image: medium}
}