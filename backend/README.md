# Documentaion


# Auth api's
## Sign up 
URL : ```http://localhost:3000/signup```
### Test condition 
```
{
    "name": "jaswanth",
    "email": "jaswanth@gmail.com",
    "password": "hsample@123"
}
```
### Expected return
```
{
    "message": "user create sucessfully"
}
```

## Login
URL : ```http://localhost:3000/signin```
### Test condition
```
{
    "email": "jaswanth@gmail.com",
    "password": "hsample@123"
}
```
### Expected return
```
{
    "message": "user found",
    "verify": true,
    "cookie": "cookie sent"
}
```

# Blog curd api

## Create blog

URL : ``` http://localhost:3000/createblog ```

### Test condition
```
{
    "title" : "hello",
    "image" : "https://www.jiomart.com/images/product/original/590004487/apple-indian-6-pcs-pack-approx-750-g-950-g-product-images-o590004487-p590004487-0-202501031744.jpg?im=Resize=(420,420)",
    "content" : "this is apple and this has may health benifits",
    "author" : "jaswanth"
}

```
### expected return
```
{
    "message": "blog created sucessfully"
}
```

## Delete blog
URL : ```http://localhost:3000/deleteblog```
### Test condition
```
{
    "id": "6961f61d3befcc1e1f3fed7d"
}
```
### Expected return
```
{
    "message": "the blog is deleted sucessfully"
}
```
## Profile Management
### Create profile
URL : ```http://localhost:3000/createprofile```
### Test condition
```
{
  "username": "test_user_01",
  "bio": "This is a dummy profile for API testing",
  "email": "testuser01@testmail.com",
  "twitter": "https://twitter.com/test_user",
  "instagram": "https://instagram.com/test_user",
  "github": "https://github.com/test_user",
  "location": "Test City"
}
```
### Expected return
```
{
    "message": "profile creation sucessful"
}
```

