// NOTE: This file was autogenerated by re_types_builder; DO NOT EDIT.
// Based on "crates/re_types/definitions/rerun/datatypes/point2d.fbs"

#include <arrow/api.h>

#include "point2d.hpp"

namespace rr {
    namespace datatypes {
        std::shared_ptr<arrow::DataType> Point2D::to_arrow_datatype() {
            return arrow::struct_({
                arrow::field("x", arrow::float32(), false, nullptr),
                arrow::field("y", arrow::float32(), false, nullptr),
            });
        }
    } // namespace datatypes
} // namespace rr