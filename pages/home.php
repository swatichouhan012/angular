<div class="container" ng-controller="postController">
<div class="col-sm-8 col-sm-offset-2">
    <div class="page-header"><h1>Product Add</h1></div>
    <!-- FORM -->
    <form name="userForm"  method="post"  enctype="multipart/form-data">
    <div class="form-group">
        <label>Product Name</label>
        <input type="text"  class="form-control" required ng-model="product.name">
    </div>
    <div class="form-group">
        <label>Category</label>
        <input type="text" class="form-control" required ng-model="product.category">
    </div>
    <div class="form-group">
        <label>Price</label>
        <input type="text" class="form-control" required ng-model="product.price" allow-numbers-only />
    </div>
    <div class="form-group">
        <label>Image</label>
        <input type="file" ng-model="myFile" required class="form-control"  onchange="angular.element(this).scope().uploadedFile(this)">
    </div>
    <button type="submit" ng-click="submitForm()" class="btn btn-primary">Submit</button>
    </form>
</div>
</div>
