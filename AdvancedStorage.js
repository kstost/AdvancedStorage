// okk
(function () {
   var root = this;
   var AdvancedStorage = function () {
      var pointer = this;
      pointer.dict = {};
   };
   AdvancedStorage.prototype = {
      set: function (key, val, mode) {
         var pointer = this;
         if (val !== undefined) {
            if (mode == 'minus') {
               pointer.dict[key] -= val;
            }
            else if (mode == 'plus') {
               pointer.dict[key] += val;
            }
            else {
               pointer.dict[key] = val;
            }
         }
         return pointer.dict[key];
      },
      get: function (key, default_) {
         var pointer = this;
         if (pointer.dict[key] === undefined) {
            if (default_ !== undefined) {
               pointer.dict[key] = default_;
            }
         }
         return pointer.dict[key];
      }
   };
   root.AdvancedStorage = AdvancedStorage;
}).call(this);
