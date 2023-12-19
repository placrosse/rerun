# DO NOT EDIT! This file was auto-generated by crates/re_types_builder/src/codegen/python.rs
# Based on "crates/re_types/definitions/rerun/blueprint/components/space_view_class.fbs".

# You can extend this class by creating a "SpaceViewClassExt" class in "space_view_class_ext.py".

from __future__ import annotations

from typing import Any, Sequence, Union

import pyarrow as pa
from attrs import define, field

from ..._baseclasses import BaseBatch, BaseExtensionType, ComponentBatchMixin

__all__ = [
    "SpaceViewClass",
    "SpaceViewClassArrayLike",
    "SpaceViewClassBatch",
    "SpaceViewClassLike",
    "SpaceViewClassType",
]


@define(init=False)
class SpaceViewClass:
    """**Component**: The class of a `SpaceView`."""

    def __init__(self: Any, value: SpaceViewClassLike):
        """Create a new instance of the SpaceViewClass component."""

        # You can define your own __init__ function as a member of SpaceViewClassExt in space_view_class_ext.py
        self.__attrs_init__(value=value)

    value: str = field(converter=str)

    def __str__(self) -> str:
        return str(self.value)


SpaceViewClassLike = SpaceViewClass
SpaceViewClassArrayLike = Union[
    SpaceViewClass,
    Sequence[SpaceViewClassLike],
]


class SpaceViewClassType(BaseExtensionType):
    _TYPE_NAME: str = "rerun.blueprint.components.SpaceViewClass"

    def __init__(self) -> None:
        pa.ExtensionType.__init__(self, pa.utf8(), self._TYPE_NAME)


class SpaceViewClassBatch(BaseBatch[SpaceViewClassArrayLike], ComponentBatchMixin):
    _ARROW_TYPE = SpaceViewClassType()

    @staticmethod
    def _native_to_pa_array(data: SpaceViewClassArrayLike, data_type: pa.DataType) -> pa.Array:
        raise NotImplementedError  # You need to implement native_to_pa_array_override in space_view_class_ext.py