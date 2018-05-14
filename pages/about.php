<a ui-sref="/">Home</a>   
<div ng-controller="productController"> 
	
	<div>Item</div>
	
	
	<table class="table table-bordered">
    <thead>
      <tr>
        <th>Sno.</th>
        <th>Product</th>
        <th>Category</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr ng-repeat="list in list">
        <td>{{$index+1}}.</td>
        <td>{{list.name}}</td>
        <td>{{list.category}}</td>
        <td><img src="../image/{{list.image}}" height="80px"></td>
        <td><button>Add To Cart</button>
			<button>Remove</button>
        </td>
      </tr>
    </tbody>
    </table>
</div>

