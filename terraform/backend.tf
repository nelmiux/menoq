terraform {
  backend "s3" {
    key     = "terraform/menoq.tfstate"
    region  = "us-east-1"
    encrypt = true
  }
}
