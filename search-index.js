var searchIndex = {};
searchIndex['objc_foundation'] = {"items":[[0,"","objc_foundation",""],[1,"NSEnumerator","",""],[1,"NSRange","",""],[11,"location","","",0],[11,"length","","",0],[1,"ClassName","",""],[2,"NSArray","",""],[2,"NSComparisonResult","",""],[12,"Ascending","","",1],[12,"Same","","",1],[12,"Descending","","",1],[2,"NSMutableArray","",""],[2,"NSDictionary","",""],[2,"NSObject","",""],[2,"NSString","",""],[2,"NSValue","",""],[3,"class","",""],[10,"from_ordering","","",1],[10,"as_ordering","","",1],[10,"from_ptr","","",2],[10,"next","","",2],[10,"code","core::option","",3],[10,"code","","",3],[10,"class_name","objc_foundation","",4],[10,"eq","","",4],[10,"hash","","",4],[10,"fmt","","",4],[10,"index","","",4],[10,"code","core::option","",3],[10,"code","","",3],[10,"class_name","objc_foundation","",5],[10,"eq","","",5],[10,"hash","","",5],[10,"fmt","","",5],[10,"index","","",5],[10,"code","core::option","",3],[10,"code","","",3],[10,"class_name","objc_foundation","",6],[10,"eq","","",6],[10,"hash","","",6],[10,"fmt","","",6],[10,"index","","",6],[10,"code","core::option","",3],[10,"code","","",3],[10,"class_name","objc_foundation","",7],[10,"eq","","",7],[10,"hash","","",7],[10,"fmt","","",7],[10,"code","core::option","",3],[10,"code","","",3],[10,"class_name","objc_foundation","",8],[10,"eq","","",8],[10,"hash","","",8],[10,"fmt","","",8],[10,"as_slice","","",8],[10,"code","core::option","",3],[10,"code","","",3],[10,"class_name","objc_foundation","",9],[10,"eq","","",9],[10,"hash","","",9],[10,"fmt","","",9],[4,"NSMutableSharedArray","",""],[4,"NSSharedArray","",""],[6,"INSArray","",""],[10,"count","","",10],[10,"object_at","","",10],[10,"first_object","","",10],[10,"last_object","","",10],[10,"object_enumerator","","",10],[10,"from_refs","","",10],[10,"from_vec","","",10],[10,"objects_in_range","","",10],[10,"to_vec","","",10],[10,"into_vec","","",10],[6,"INSMutableArray","",""],[10,"add_object","","",11],[10,"insert_object_at","","",11],[10,"replace_object_at","","",11],[10,"remove_object_at","","",11],[10,"remove_last_object","","",11],[10,"remove_all_objects","","",11],[10,"sort_by","","",11],[6,"INSOwnedArray","",""],[10,"mut_object_at","","",12],[6,"INSSharedArray","",""],[10,"shared_object_at","","",13],[10,"from_slice","","",13],[10,"to_shared_vec","","",13],[6,"INSDictionary","",""],[10,"count","","",14],[10,"object_for","","",14],[10,"all_keys","","",14],[10,"all_values","","",14],[10,"key_enumerator","","",14],[10,"object_enumerator","","",14],[10,"keys_and_objects","","",14],[10,"from_refs","","",14],[10,"from_keys_and_objects","","",14],[10,"into_keys_and_objects","","",14],[6,"INSObject","",""],[9,"class_name","","",15],[10,"class","","",15],[10,"hash_code","","",15],[10,"is_equal","","",15],[10,"description","","",15],[10,"is_kind_of","","",15],[10,"as_object","","",15],[10,"new","","",15],[6,"INSCopying","",""],[10,"copy","","",16],[6,"INSMutableCopying","",""],[10,"mutable_copy","","",17],[6,"INSString","",""],[10,"as_str","","",18],[10,"from_str","","",18],[6,"INSValue","",""],[10,"value","","",19],[10,"encoding","","",19],[10,"from_value","","",19],[15,"object_struct!","",""],[15,"object_impl!","",""],[10,"count","","",10],[10,"object_at","","",10],[10,"first_object","","",10],[10,"last_object","","",10],[10,"object_enumerator","","",10],[10,"from_refs","","",10],[10,"from_vec","","",10],[10,"objects_in_range","","",10],[10,"to_vec","","",10],[10,"into_vec","","",10],[10,"mut_object_at","","",12],[10,"shared_object_at","","",13],[10,"from_slice","","",13],[10,"to_shared_vec","","",13],[10,"add_object","","",11],[10,"insert_object_at","","",11],[10,"replace_object_at","","",11],[10,"remove_object_at","","",11],[10,"remove_last_object","","",11],[10,"remove_all_objects","","",11],[10,"sort_by","","",11],[10,"count","","",14],[10,"object_for","","",14],[10,"all_keys","","",14],[10,"all_values","","",14],[10,"key_enumerator","","",14],[10,"object_enumerator","","",14],[10,"keys_and_objects","","",14],[10,"from_refs","","",14],[10,"from_keys_and_objects","","",14],[10,"into_keys_and_objects","","",14],[10,"class","","",15],[10,"hash_code","","",15],[10,"is_equal","","",15],[10,"description","","",15],[10,"is_kind_of","","",15],[10,"as_object","","",15],[10,"new","","",15],[10,"copy","","",16],[10,"mutable_copy","","",17],[10,"as_str","","",18],[10,"from_str","","",18],[10,"value","","",19],[10,"encoding","","",19],[10,"from_value","","",19]],"paths":[[1,"NSRange"],[2,"NSComparisonResult"],[1,"NSEnumerator"],[2,"Option"],[2,"NSArray"],[2,"NSMutableArray"],[2,"NSDictionary"],[2,"NSObject"],[2,"NSString"],[2,"NSValue"],[6,"INSArray"],[6,"INSMutableArray"],[6,"INSOwnedArray"],[6,"INSSharedArray"],[6,"INSDictionary"],[6,"INSObject"],[6,"INSCopying"],[6,"INSMutableCopying"],[6,"INSString"],[6,"INSValue"]]};
searchIndex['objc_test_utils'] = {"items":[[0,"","objc_test_utils",""],[2,"IntBlock","","A block that takes no arguments and returns an integer: `int32_t (^)()`."],[2,"AddBlock","","A block that takes one integer argument, adds to it, and returns the sum:\n`int32_t (^)(int32_t)`."],[3,"get_int_block","","Returns a pointer to a global `IntBlock` that returns 7."],[3,"get_int_block_with","","Returns a pointer to a copied `IntBlock` that returns `i`."],[3,"get_add_block","","Returns a pointer to a global `AddBlock` that returns its argument + 7."],[3,"get_add_block_with","","Returns a pointer to a copied `AddBlock` that returns its argument + `i`."],[3,"invoke_int_block","","Invokes an `IntBlock` and returns its result."],[3,"invoke_add_block","","Invokes an `AddBlock` with `a` and returns the result."]],"paths":[]};

searchIndex['objc'] = {"items":[[0,"","objc",""],[1,"Id","","A pointer type for Objective-C's reference counted objects. The object of\nan `Id` is retained and sent a `release` message when the `Id` is dropped."],[1,"ClassDecl","","A type for declaring a new class and adding new methods and ivars to it\nbefore registering it."],[1,"MethodDecl","","A type for declaring a new method.\n`MethodDecl`s are usually created using the `method!` macro."],[11,"sel","","The method's selector.",0],[11,"imp","","The method's implementation.",0],[11,"types","","The types of the method's arguments.",0],[1,"Encoding","","A simple wrapper around a static string slice to contain the Objective-C\ntype encoding for a type. This is necessary for the `Encode` trait."],[1,"WeakId","","A pointer type for a weak reference to an Objective-C reference counted\nobject."],[2,"Owned","","A type used to mark that a struct owns the object(s) it contains,\nso it has the sole references to them."],[2,"Shared","","A type used to mark that the object(s) a struct contains are shared,\nso there may be other references to them."],[3,"encode","","Returns the Objective-C type encoding for a type."],[3,"to_obj_ptr","","Converts to an Object pointer; this function is mainly used by the\n`msg_send!` macro."],[0,"runtime","","A Rust interface for the functionality of the Objective-C runtime."],[1,"MallocBuffer","objc::runtime","A type that represents a `malloc`'d chunk of memory."],[1,"MallocString","","A type that represents a `malloc`'d string."],[1,"Sel","","A type that represents a method selector."],[2,"Ivar","","A type that represents an instance variable."],[2,"Method","","A type that represents a method in a class definition."],[2,"Class","","A type that represents an Objective-C class."],[2,"Object","","A type that represents an instance of a class."],[3,"sel_registerName","",""],[3,"sel_getName","",""],[3,"class_getName","",""],[3,"class_getInstanceSize","",""],[3,"class_getInstanceMethod","",""],[3,"class_getInstanceVariable","",""],[3,"class_copyMethodList","",""],[3,"class_copyIvarList","",""],[3,"class_addMethod","",""],[3,"class_addIvar","",""],[3,"objc_allocateClassPair","",""],[3,"objc_disposeClassPair","",""],[3,"objc_registerClassPair","",""],[3,"object_getClass","",""],[3,"objc_getClassList","",""],[3,"objc_copyClassList","",""],[3,"objc_getClass","",""],[3,"ivar_getName","",""],[3,"ivar_getOffset","",""],[3,"ivar_getTypeEncoding","",""],[3,"objc_msgSend","",""],[3,"method_getName","",""],[3,"method_getImplementation","",""],[3,"method_getTypeEncoding","",""],[3,"method_copyReturnType","",""],[3,"method_copyArgumentType","",""],[3,"method_getNumberOfArguments","",""],[3,"method_setImplementation","",""],[3,"method_exchangeImplementations","",""],[4,"Imp","","A pointer to the start of a method implementation."],[10,"new","","Constructs a new `MallocBuffer` for a `malloc`'d buffer\nwith the given length at the given pointer.\nReturns `None` if the given pointer is null.\nWhen this `MallocBuffer` drops, the buffer will be `free`'d.",1],[10,"drop","","",1],[10,"as_slice","","",1],[10,"new","","Constructs a new `MallocString` for a `malloc`'d C string buffer.\nReturns `None` if the given pointer is null or the C string isn't UTF8.\nWhen this `MallocString` drops, the buffer will be `free`'d.",2],[10,"as_slice","","",2],[10,"register","","Registers a method with the Objective-C runtime system,\nmaps the method name to a selector, and returns the selector value.",3],[10,"name","","Returns the name of the method specified by self.",3],[10,"eq","","",3],[10,"clone","","",3],[10,"name","","Returns the name of self.",4],[10,"offset","","Returns the offset of self.",4],[10,"type_encoding","","Returns the type string of self.",4],[10,"name","","Returns the name of self.",5],[10,"type_encoding","","Returns a string describing self's parameter and return types.",5],[10,"return_type","","Returns a string describing self's return type.",5],[10,"argument_type","","Returns a string describing a single parameter type of self, or\n`None` if self has no parameter at the given index.",5],[10,"arguments_count","","Returns the number of arguments accepted by self.",5],[10,"implementation","","Returns the implementation of self.",5],[10,"set_implementation","","Sets the implementation of self.\nUnsafe because the caller must ensure the implementation has the\ncorrect self, return, and argument types for the method.",5],[10,"exchange_implementation","","Exchanges the implementations of self with another `Method`.\nUnsafe because the caller must ensure the two methods have the same\nself, return, and argument types.",5],[10,"get","","Returns the class definition of a specified class, or `None` if the\nclass is not registered with the Objective-C runtime.",6],[10,"classes","","Obtains the list of registered class definitions.",6],[10,"classes_count","","Returns the total number of registered classes.",6],[10,"name","","Returns the name of self.",6],[10,"instance_size","","Returns the size of instances of self.",6],[10,"instance_method","","Returns a specified instance method for self, or `None` if self and\nits superclasses do not contain an instance method with the\nspecified selector.",6],[10,"instance_variable","","Returns the ivar for a specified instance variable of self, or `None`\nif self has no ivar with the given name.",6],[10,"instance_methods","","Describes the instance methods implemented by self.",6],[10,"instance_variables","","Describes the instance variables declared by self.",6],[10,"eq","","",6],[10,"class","","Returns the class of self.",7],[10,"get_ivar","","Returns a reference to the ivar of self with the given name.\nPanics if self has no ivar with the given name.\nUnsafe because the caller must ensure that the ivar is actually\nof type `T`.",7],[10,"get_mut_ivar","","Returns a mutable reference to the ivar of self with the given name.\nPanics if self has no ivar with the given name.\nUnsafe because the caller must ensure that the ivar is actually\nof type `T`.",7],[10,"set_ivar","","Sets the value of the ivar of self with the given name.\nPanics if self has no ivar with the given name.\nUnsafe because the caller must ensure that the ivar is actually\nof type `T`.",7],[10,"from_ptr","objc","Constructs an `Id` from a pointer to an unretained object and\nretains it. Panics if the pointer is null.\nUnsafe because the pointer must be to a valid object and\nthe caller must ensure the ownership is correct.",8],[10,"from_retained_ptr","","Constructs an `Id` from a pointer to a retained object; this won't\nretain the pointer, so the caller must ensure the object has a +1\nretain count. Panics if the pointer is null.\nUnsafe because the pointer must be to a valid object and\nthe caller must ensure the ownership is correct.",8],[10,"maybe_from_ptr","","Constructs an `Id` from a pointer to an unretained object and\nretains it if the pointer isn't null, otherwise returns None.\nUnsafe because the pointer must be to a valid object and\nthe caller must ensure the ownership is correct.",8],[10,"maybe_from_retained_ptr","","Constructs an `Id` from a pointer to a retained object if the pointer\nisn't null, otherwise returns None. This won't retain the pointer,\nso the caller must ensure the object has a +1 retain count.\nUnsafe because the pointer must be to a valid object and\nthe caller must ensure the ownership is correct.",8],[10,"share","","\"Downgrade\" an owned `Id` to a `ShareId`, allowing it to be cloned.",8],[10,"as_ptr","","",8],[10,"clone","","",8],[10,"drop","","",8],[10,"deref","","",8],[10,"deref_mut","","",8],[10,"eq","","",8],[10,"ne","","",8],[10,"hash","","",8],[10,"fmt","","",8],[10,"into_id_vec","collections::vec","",9],[0,"block","objc","A Rust interface for Objective-C blocks."],[1,"Block","objc::block","An Objective-C block that takes arguments of `A` when called and\nreturns a value of `R`."],[1,"ConcreteBlock","","An Objective-C block whose size is known at compile time and may be\nconstructed on the stack."],[6,"BlockArguments","","Types that may be used as the arguments to an Objective-C block."],[9,"call_block","","Calls the given `Block` with self as the arguments.",10],[9,"invoke_for_concrete_block","","Returns an invoke function for a `ConcreteBlock` that takes this type\nof arguments.",10],[10,"call","","Call self with the given arguments.",11],[10,"new","","Constructs a `ConcreteBlock` with the given closure.\nWhen the block is called, it will return the value that results from\ncalling the closure.",12],[10,"copy","","Copy self onto the heap.",12],[10,"clone","","",12],[4,"Target","",""],[10,"deref","","",12],[10,"deref_mut","","",12],[10,"new","objc","Constructs a `ClassDecl` with the given superclass and name.\nReturns `None` if the class couldn't be allocated.",13],[10,"add_method","","Adds a method declared with the given `MethodDecl` to self.\nReturns true if the method was sucessfully added.",13],[10,"add_ivar","","Adds an ivar with type `T` and the provided name to self.\nReturns true if the ivar was sucessfully added.",13],[10,"register","","Registers self, consuming it and returning a reference to the\nnewly registered `Class`.",13],[10,"drop","","",13],[10,"code","objc::runtime","",3],[10,"code","core::option","",14],[10,"code","","",14],[10,"code","","",14],[10,"code","","",14],[10,"as_ptr","","",14],[10,"as_ptr","","",14],[10,"new","objc","Construct a new `WeakId` referencing the given `ShareId`.",15],[10,"load","","Load a `ShareId` from the `WeakId` if the object still exists.\nReturns `None` if the object has been deallocated.",15],[10,"drop","","",15],[4,"ShareId","","A convenient alias for a shared `Id`."],[6,"IdVector","","Extension methods for slices containing `Id`s."],[9,"as_refs_slice","","Convert a slice of `Id`s into a slice of references",16],[6,"IntoIdVector","","Trait to convert to a vector of `Id`s by consuming self."],[9,"into_id_vec","","Converts to a vector of `Id`s by consuming self, retaining each object\ncontained in self.\nUnsafe because the caller must ensure the `Id`s are constructed from\nvalid objects and the ownership of the resulting `Id`s is correct.",17],[6,"Ownership","","A type that marks what type of ownership a struct has over the object(s)\nit contains; specifically, either `Owned` or `Shared`."],[6,"Encode","","Types that have an Objective-C type encoding. For more information, see\nApple's documentation:\nhttps://developer.apple.com/library/mac/documentation/Cocoa/Conceptual/ObjCRuntimeGuide/Articles/ocrtTypeEncodings.html"],[9,"code","","Return the Encoding for Self.",18],[6,"Message","","Types that may be sent Objective-C messages.\nFor example: objects, classes, and blocks."],[6,"ToMessage","","A trait for converting to a pointer to a type that may be sent Objective-C\nmessages."],[9,"as_ptr","","",19],[10,"is_nil","","",19],[15,"sel!","","Registers a selector, returning an `Sel`."],[15,"msg_send!","","Sends a message to an object. The first argument should implement the\n`ToMessage` trait, and the syntax is similar to the message syntax in\nObjective-C."],[15,"encode_message_impl!","","Implements the `Encode` trait for a `Message` type.\nSpecifically, this will implement `Encode` for reference, pointers, and\n`Option` references of the given type."],[15,"method!","","Declares a method, returning a `MethodDecl`.\nThe syntax is a combination of Objective-C's syntax and Rust's:"],[10,"is_nil","","",19]],"paths":[[1,"MethodDecl"],[1,"MallocBuffer"],[1,"MallocString"],[1,"Sel"],[2,"Ivar"],[2,"Method"],[2,"Class"],[2,"Object"],[1,"Id"],[1,"Vec"],[6,"BlockArguments"],[1,"Block"],[1,"ConcreteBlock"],[1,"ClassDecl"],[2,"Option"],[1,"WeakId"],[6,"IdVector"],[6,"IntoIdVector"],[6,"Encode"],[6,"ToMessage"]]};

initSearch(searchIndex);