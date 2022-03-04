class Pagination {
  constructor({currentPage, totalPages}) {
    this.current = currentPage;
    this.total = totalPages;
    this.value = [];
  }
  getPages() {
    return this
      .setCenter()
      .filterCenter()
      .includeTreeLeft()
      .includeTreeRight()
      .includeLeftDots()
      .includeRightDots()
      .includeFirstAndLast()
      .value;
  }

  setCenter() {
    this.value = [this.current - 2, this.current - 1, this.current, this.current + 1, this.current + 2];
    return this;
  }
  filterCenter() {
    this.value = this.value.filter(position => position > 1 && position < this.total);
    return this;
  }
  includeTreeLeft() {
    if (this.value == 5) {
      this.value = [2].concat(this.value)
      this.includeTreeLeft()
    }
    return this;
  }
  includeTreeRight() {
    if (this.current == this.total - 4) {
      this.value = this.value.concat([this.total - 1]);
      this.includeTreeRight();
   }
   return this;
  }
  includeLeftDots() {
    if (this.current > 5) {
      this.value = ["..."].concat(this.value);
    } 
    return this;
  }
  includeRightDots() {
    if (this.current < this.total - 4) {
      this.value = this.value.concat(["..."]);
    } 
    return this;
  }
  includeFirstAndLast() {
    this.value = [1].concat(this.value).concat(this.total);
    return this;
  }
  print(){
    console.log(this.value);
    return this.value;
  }
}


const main = () => {
  // Example
  const pages = new Pagination({currentPage: 32, totalPages: 2323}).getPages();

  console.log(pages);
  // [
  //   1,  '...', 30,
  //   31, 32,    33,
  //   34, '...', 2323
  // ]
}

main()

