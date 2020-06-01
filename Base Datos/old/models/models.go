package models

import (
	"github.com/dgrijalva/jwt-go"
)

type Libro struct {
	Id          string `json:"id"`
	Nombre      string `json:"nombre"`
	Isbn        string `json:"isbn"`
	Genero      string `json:"genero"`
	Descripcion string `json:"descripcion"`
	Portada     string `json:"portada"`
	IdAutor     string `json:"idAutor"`

	FirstName string `json:"first_name"`
	LastName  string `json:"last_name"`
}

type Libro2 struct {
	Id          string `json:"id"`
	Nombre      string `json:"nombre"`
	Isbn        string `json:"isbn"`
	IdAutor     string `json:"idAutor"`
	Portada     string `json:"portada"`
	Genero      string `json:"genero"`
	Descripcion string `json:"descripcion"`
	FirstName   string `json:"first_name"`
	LastName    string `json:"last_name"`
}

type Autor struct {
	Id              string `json:"id"`
	FirstName       string `json:"first_name"`
	LastName        string `json:"last_name"`
	Nacionalidad    string `json:"nacionalidad"`
	FechaNacimiento string `json:"fechaNacimiento"`
}

type Usuario struct {
	Id       string `json:"id"`
	Nombre   string `json:"nombre"`
	Password string `json:"password"`
	Email    string `json:"email"`
	Rol      string `json:"rol"`
	Tok      string `json:"tok"`
	Codigo   string `json:"codigo"`
}

type Claims struct {
	//Id     uint
	Nombre string
	Email  string
	*jwt.StandardClaims
}
type Value struct {
	Id     string `json:"id"`
	Nombre string `json:"Nombre"`
	Rol    string `json:"rol"`
	Token  string `json:"token"`
}
