window.SIDEBAR_ITEMS = {"constant":[["ADDR_MASK",""],["BOTTOM_LEVEL","The level used for [`DenseLeaf`]."],["LEVEL_STEP","How many bits we progress in each [`BranchNode`]"],["MAX_SPARSE_LEAF_LEN","When a [`SparseLeaf`] goes over this, it becomes a [`BranchNode`]."],["NUM_CHILDREN_IN_DENSE","Number of children in [`DenseLeaf`]."],["NUM_CHILDREN_IN_NODE",""],["NUM_NODE_STEPS",""],["NUM_STEPS_IN_DENSE_LEAF",""],["ROOT_LEVEL",""]],"enum":[["Node",""]],"fn":[["child_level_and_size",""],["range_u64_from_range_bounds",""]],"struct":[["BranchNode",""],["DenseLeaf",""],["Int64Histogram","A histogram, mapping [`i64`] key to a [`u64`] count optimizing for very fast range-queries."],["Iter","An iterator over an [`Int64Histogram`]."],["NodeIterator",""],["SparseLeaf",""],["TreeIterator",""]],"type":[["Level","How high up in the tree we are (where root is highest). `1 << level` is the size of the range the next child. So `1 << ROOT_LEVEL` is the size of the range of each children of the root."]]};